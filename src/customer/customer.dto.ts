import { IsInt, IsString, MaxLength, MinLength, IsNumber, IsDate } from "class-validator";
import { Optional } from "@nestjs/common";


export class CustomerDto {

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(10, { message: 'O campo deve ter no mínimo 10 caracteres.' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    name: string;

    @IsInt({ message: 'Não é um inteiro válido!' })
    @MaxLength(20, { message: 'O campo deve ter no máximo 20 caracteres.' })
    phone: number;


    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(80, { message: 'O campo deve ter no máximo 80 caracteres.' })
    email: string;

    @Optional()
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(100, { message: 'O campo deve ter no máximo 100 caracteres.' })
    address: string;

    @Optional()
    @IsNumber(null, { message: 'Náo é um número válido!' })
    cep: number;

    @Optional()
    @IsNumber(null, { message: 'Náo é um número válido!' })
    @MinLength(5, { message: 'O campo deve ter no mínimo 5 caracteres.' })
    @MaxLength(10, { message: 'O campo deve ter no máximo 10 caracteres.' })
    rg: number;

    @Optional()
    @IsNumber(null, { message: 'Náo é um número válido!' })
    @MinLength(11, { message: 'O campo deve ter no mínimo 11 caracteres.' })
    @MaxLength(11, { message: 'O campo deve ter no máximo 11 caracteres.' })
    cpf: number;

    @Optional()
    @IsDate({ message: 'Não é uma data válida!' })
    birth: Date;

    @Optional()
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(50, { message: 'O campo deve ter no máximo 50 caracteres.' })
    naturalness: string;

    @Optional()
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    profession: string;

}


