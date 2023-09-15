import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsPositive,
  IsOptional,
} from 'class-validator';
import { ReportType } from 'src/data';
import { Exclude, Expose } from 'class-transformer';

// request dto
export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  source: string;
  @IsNumber()
  @IsPositive()
  amount: number;
}
// request dto
export class UpdateReportDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;
}
// response dto
export class ReportResponseDto {
  id: string;
  source: string;
  amount: number;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at;
  }

  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;

  type: ReportType;

  constructor(partial: Partial<ReportResponseDto>) {
    Object.assign(this, partial);
  }
}
