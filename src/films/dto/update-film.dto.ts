import { PartialType } from '@nestjs/swagger';
import { CreateFilmDto } from './create-film.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFilmDto extends PartialType(CreateFilmDto) {
  @ApiProperty({
    example: '3a7de6fd-6685-48d3-a5e0-b5caf98e0c87',
    description: 'El id de la Película.',
  })
  id: string;
}
