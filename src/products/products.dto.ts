import { IsNumber, IsString, IsNotEmpty, Min } from 'class-validator';
export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  id: number;

  @IsString()
  @IsNotEmpty()
  productName: string;
}
