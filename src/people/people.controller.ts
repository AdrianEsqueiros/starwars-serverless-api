import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('People')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  @ApiOperation({
    summary: 'Crea un personaje de Star Wars',
  })
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get('/all')
  @ApiOperation({
    summary: 'Obtener información de los personaje de Star Wars',
  })
  findAll() {
    return this.peopleService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encuentra un personaje de Star Wars por Id',
  })
  findOne(@Param('id') id: string) {
    return this.peopleService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualiza un personaje de Star Wars por Id',
  })
  update(@Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(updatePersonDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Elimina un personaje de Star Wars por Id',
  })
  remove(@Param('id') id: string) {
    return this.peopleService.remove(id);
  }
}
