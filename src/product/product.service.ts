import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { responseHandler, ResponseObject } from "src/utils";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import * as fs from 'fs-extra';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>) { }


  async create(createProductDto: CreateProductDto, images: Array<Express.Multer.File>): Promise<ResponseObject> {
    try {
      const imageUrls = await Promise.all(
        images.map(async (value) => {
          const { originalname, buffer: imageBuffer } = value;
          const filename: string = `${new Date().toISOString()}-${originalname}`;
          const publicPath = `./public/assets/images/${filename}`;
          const distPath = `./dist/public/assets/images/${filename}`;

          // Save the image to the public directory
          await fs.writeFile(publicPath, imageBuffer);

          // Copy the image to the build output directory
          await fs.copy(publicPath, distPath);

          return filename;
        })
      );
      // const productData = await this.productRepository.create({ ...createProductDto, imageUrls: imageUrls })
      // let savedProductData = await this.productRepository.save(productData)


      const productData = this.productRepository.create({ ...createProductDto, imageUrls: imageUrls })
      console.log(productData)
      const savedProductData = await this.productRepository.save(productData);
      return responseHandler(
        'User created successfully',
        savedProductData,
      )
    }
    catch (error) {

    }
  }

  async findAll(): Promise<ResponseObject> {
    try {
      const data = await this.productRepository.find();
      return responseHandler('data fetched successfully', data)
    }
    catch (err) {
      throw err
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
