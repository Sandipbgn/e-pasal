import { User } from "../entities/user.entity";

export class CreateUserDto {
    name: string;
    username: string;
    email: string;
    address: string;
    password: string;
}
