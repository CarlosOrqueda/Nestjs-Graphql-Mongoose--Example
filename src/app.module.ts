import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConnectionOptions } from 'mongoose'

const DBOption : ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

@Module({
  imports: [
    ItemsModule,
    GraphQLModule.forRoot({autoSchemaFile: 'schema.gql'}), 
    MongooseModule.forRoot('mongodb://localhost/nestgraphql', DBOption)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}