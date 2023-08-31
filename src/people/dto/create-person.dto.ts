import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty({
    example: 'Luke Skywalker',
    description: 'El nombre de la persona.',
  })
  nombre: string;

  @ApiProperty({
    example: 172,
    description: 'La altura de la persona en centímetros.',
  })
  altura: number;

  @ApiProperty({
    example: 77,
    description: 'La masa de la persona en kilogramos.',
  })
  masa: number;

  @ApiProperty({
    example: 'rubio',
    description: 'El color del pelo de la persona.',
  })
  color_pelo: string;

  @ApiProperty({
    example: 'blanco',
    description: 'El color de la piel de la persona.',
  })
  color_piel: string;

  @ApiProperty({
    example: 'azul',
    description: 'El color de los ojos de la persona.',
  })
  color_ojos: string;

  @ApiProperty({
    example: '19 ABY',
    description: 'El año de nacimiento de la persona.',
  })
  año_nacimiento: string;

  @ApiProperty({
    example: 'masculino',
    description: 'El género de la persona.',
  })
  género: string;

  @ApiProperty({
    example: 'Tatooine',
    description: 'El mundo natal de la persona.',
  })
  mundo_natal: string;

  @ApiProperty({
    example: [],
    description: 'Lista de películas en las que aparece la persona.',
  })
  películas: string[];

  @ApiProperty({
    example: [],
    description: 'Lista de especies a las que pertenece la persona.',
  })
  especie: string[];

  @ApiProperty({
    example: [],
    description: 'Lista de vehículos que ha utilizado la persona.',
  })
  vehículos: string[];

  @ApiProperty({
    example: [],
    description: 'Lista de naves estelares que ha utilizado la persona.',
  })
  naves_estelares: string[];
}
