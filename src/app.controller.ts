import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('starwars')
@ApiTags('Star Wars (SWAPI)')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('films/:id')
  @ApiOperation({
    summary:
      'Obtener información de una película de SWAPI por ID y traduce con AWS Translate el Opening Crawl',
  })
  @ApiResponse({ status: 200, description: 'Éxito', type: String })
  getFilms(@Param('id') id: number): Promise<string> {
    return this.appService.getFilmsFromSWApi(id);
  }

  @Get('people/:id')
  @ApiOperation({
    summary: 'Obtener información de un personaje de SWAPI por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Éxito',
    type: String,
  })
  getPeople(@Param('id') id: number): Promise<string> {
    return this.appService.getPeopleFromSWApi(id);
  }

  @Get('planets/:id')
  @ApiOperation({
    summary: 'Obtener información de un planeta de SWAPI por ID',
  })
  @ApiResponse({ status: 200, description: 'Éxito', type: String })
  getPlanets(@Param('id') id: number): Promise<string> {
    return this.appService.getPlanetsFromSWApi(id);
  }

  @Get('species/:id')
  @ApiOperation({
    summary: 'Obtener información de una especie de SWAPI por ID',
  })
  @ApiResponse({ status: 200, description: 'Éxito', type: String })
  getSpecies(@Param('id') id: number): Promise<string> {
    return this.appService.getSpeciesFromSWApi(id);
  }

  @Get('starships/:id')
  @ApiOperation({
    summary: 'Obtener información de una nave espacial de SWAPI por ID',
  })
  @ApiResponse({ status: 200, description: 'Éxito', type: String })
  getStarships(@Param('id') id: number): Promise<string> {
    return this.appService.getStarshipsFromSWApi(id);
  }
}
