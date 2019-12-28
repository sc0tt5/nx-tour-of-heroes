import { Module } from '@nestjs/common';
import { SharedDataAccessModule } from '@nx-demo/shared/data-access';
import { AppController } from './app.controller';

@Module({
  imports: [SharedDataAccessModule],
  controllers: [AppController]
})
export class AppModule {}
