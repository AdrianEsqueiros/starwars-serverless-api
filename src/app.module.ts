import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamoDBModule } from './dynamo-db/dynamo-db.module';
import { FilmsModule } from './films/films.module';

import { PeopleModule } from './people/people.module';
import { Translate } from './utils/translate';
@Module({
  imports: [DynamoDBModule, FilmsModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService, Translate],
})
export class AppModule {}
