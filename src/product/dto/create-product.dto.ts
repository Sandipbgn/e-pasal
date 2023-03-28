import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, Validate, ValidateNested } from "class-validator";


export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @ValidateNested()
    @Type(() => Array<String>)
    @IsArray()
    colors: string[];


    @IsNumber()
    rating: number;

    @IsNumber()
    price: number;

    @IsBoolean()
    isFavorite: boolean;

    @IsBoolean()
    isPopular: boolean;
}
