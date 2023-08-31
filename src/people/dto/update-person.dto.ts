import { PartialType } from '@nestjs/swagger';
import { CreatePersonDto } from './create-person.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  @ApiProperty({
    example: '5eda0bed-0373-4b46-a5fd-b3694cb78bcc',
    description: 'El id de la persona.',
  })
  id: string;
}
