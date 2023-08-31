import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { DynamoDBModule } from '../dynamo-db/dynamo-db.module';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  imports: [DynamoDBModule],
})
export class FilmsModule {}
