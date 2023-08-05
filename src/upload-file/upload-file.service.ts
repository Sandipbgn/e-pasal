import { Injectable } from '@nestjs/common';
import { CreateUploadFileDto } from './dto/create-upload-file.dto';
import { UpdateUploadFileDto } from './dto/update-upload-file.dto';
import * as fs from 'fs-extra'

@Injectable()
export class UploadFileService {
  async create(files) {
    try {
      const fileUrls = await Promise.all(
        files.map(async (value) => {
          const { originalname, buffer: fileBuffer } = value;
          const filename: string = `${new Date().toISOString()}-${originalname}`;
          // const fileurl : string = `httpfiles/${filename}`
          const publicPath = `./public/assets/files/${filename}`;
          const distPath = `./dist/public/assets/files/${filename}`;
          // Save the image to the public directory
          await fs.writeFile(publicPath, fileBuffer);

          // Copy the image to the build output directory
          await fs.copy(publicPath, distPath);

          return filename;
        })
      );
      return fileUrls
    }
    catch (error) {

    }
  }

  findAll() {
    return `This action returns all uploadFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadFile`;
  }

  update(id: number, updateUploadFileDto: UpdateUploadFileDto) {
    return `This action updates a #${id} uploadFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadFile`;
  }
}
