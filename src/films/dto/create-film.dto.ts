import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmDto {
  @ApiProperty({
    example: 'A New Hope',
    description: 'El título de la película.',
  })
  título: string;

  @ApiProperty({
    example: 4,
    description: 'El ID del episodio.',
  })
  episode_id: number;

  @ApiProperty({
    example: 'It is a period of civil war...',
    description: 'El texto inicial de apertura de la película.',
  })
  opening_crawl: string;

  @ApiProperty({
    example: 'George Lucas',
    description: 'El director de la película.',
  })
  director: string;

  @ApiProperty({
    example: 'Lucasfilm Ltd.',
    description: 'La productora de la película.',
  })
  productora: string;

  @ApiProperty({
    example: '25 de mayo de 1977',
    description: 'La fecha de lanzamiento de la película.',
  })
  fecha_de_lanzamiento: string;

  @ApiProperty({
    example: [],
    description: 'Lista de caracteres en la película.',
  })
  caracteres: [];

  @ApiProperty({
    example: [],
    description: 'Lista de planetas en la película.',
  })
  planetas: [];

  @ApiProperty({
    example: [],
    description: 'Lista de naves estelares en la película.',
  })
  naves_estelares: [];

  @ApiProperty({
    example: [],
    description: 'Lista de vehículos en la película.',
  })
  vehículos: [];

  @ApiProperty({
    example: [],
    description: 'Lista de especies en la película.',
  })
  especie: [];
}
