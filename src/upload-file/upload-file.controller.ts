import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UploadedFiles, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { UploadFileService } from './upload-file.service';
import { CreateUploadFileDto } from './dto/create-upload-file.dto';
import { UpdateUploadFileDto } from './dto/update-upload-file.dto';

@Controller('upload-file')
export class UploadFileController {
  constructor(private readonly uploadFileService: UploadFileService) { }

  @Post()
  create(@Body() createUploadFileDto: CreateUploadFileDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),

    ) files: Array<Express.Multer.File>
  ) {
    return this.uploadFileService.create(createUploadFileDto, files);
  }

  @Get()
  findAll() {
    return this.uploadFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadFileDto: UpdateUploadFileDto) {
    return this.uploadFileService.update(+id, updateUploadFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadFileService.remove(+id);
  }
}
