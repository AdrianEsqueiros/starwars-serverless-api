import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  @ApiOperation({
    summary: 'Crea un film de Star Wars',
  })
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener información de los film de Star Wars',
  })
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encuentra un film de Star Wars por Id',
  })
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualiza un film de Star Wars por Id',
  })
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(updateFilmDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Elimina un film de Star Wars por Id',
  })
  remove(@Param('id') id: string) {
    return this.filmsService.remove(id);
  }
}
