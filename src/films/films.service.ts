import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { DynamoDBService } from '../dynamo-db/dynamo-db.service';

@Injectable()
export class FilmsService {
  private readonly filmTable = 'FilmsCollection';

  constructor(private readonly dynamoDBService: DynamoDBService) {}
  async create(createFilmDto: CreateFilmDto) {
    return await this.dynamoDBService.put(this.filmTable, createFilmDto);
  }

  async findAll() {
    return await this.dynamoDBService.scan(this.filmTable);
  }

  async findOne(id: string) {
    return await this.dynamoDBService.get(this.filmTable, id);
  }

  async update(updateFilmDto: UpdateFilmDto) {
    return await this.dynamoDBService.put(this.filmTable, updateFilmDto);
  }

  async remove(id: string) {
    return await this.dynamoDBService.delete(this.filmTable, id);
  }
}
