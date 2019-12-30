import { Module } from '@nestjs/common';
import { SharedDataAccessController } from './data-access/data-access.controller';
import { SharedDataAccessService } from './data-access/data-access.service';

@Module({
  controllers: [SharedDataAccessController],
  providers: [SharedDataAccessService]
})
export class SharedDataAccessModule {}
