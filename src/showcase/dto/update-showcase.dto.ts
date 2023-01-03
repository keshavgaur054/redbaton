import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateShowcaseDto } from './create-showcase.dto';

export class UpdateShowcaseDto extends PartialType(CreateShowcaseDto) {
    @IsString()
    updatedBy: string;
}
