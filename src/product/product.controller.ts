import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post('')
  @UseInterceptors(FilesInterceptor('images'))
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),

    ) images: Array<Express.Multer.File>) {

    return this.productService.create(createProductDto, images);
  }



  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
