import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { DynamoDBService } from '../dynamo-db/dynamo-db.service';

@Injectable()
export class PeopleService {
  private readonly peopleTable = 'CharactersCollection';

  constructor(private readonly dynamoDBService: DynamoDBService) {}
  async create(createPersonDto: CreatePersonDto) {
    return await this.dynamoDBService.put(this.peopleTable, createPersonDto);
  }

  async findAll() {
    return await this.dynamoDBService.scan(this.peopleTable);
  }

  async findOne(id: string) {
    return await this.dynamoDBService.get(this.peopleTable, id);
  }

  async update(updatePersonDto: UpdatePersonDto) {
    return await this.dynamoDBService.put(this.peopleTable, updatePersonDto);
  }

  async remove(id: string) {
    return await this.dynamoDBService.delete(this.peopleTable, id);
  }
}
