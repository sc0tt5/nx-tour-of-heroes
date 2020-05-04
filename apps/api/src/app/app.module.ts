import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DemoOneController } from './demo-one/demo-one.controller';
import { DemoOneService } from './demo-one/demo-one.service';

@Module({
  controllers: [AppController, DemoOneController],
  providers: [DemoOneService]
})
export class AppModule {}
