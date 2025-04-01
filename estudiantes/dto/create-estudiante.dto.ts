import { IsString, IsInt, IsNumber } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  nombre: string;

  @IsInt()
  edad: number;

  @IsString()
  carrera: string;

  @IsNumber()
  promedio: number;

  @IsString()
  universidad: string;

  @IsInt()
  semestre: number;

  @IsString()
  ciudad: string;
}
