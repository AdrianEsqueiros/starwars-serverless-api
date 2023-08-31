import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { DynamoDBModule } from '../dynamo-db/dynamo-db.module';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService],
  imports: [DynamoDBModule],
})
export class PeopleModule {}
