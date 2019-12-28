import { Module } from '@nestjs/common';
import { SharedDataAccessController } from './shared-data-access.controller';
import { SharedDataAccessService } from './shared-data-access.service';

@Module({
  controllers: [SharedDataAccessController],
  providers: [SharedDataAccessService]
})
export class SharedDataAccessModule {}
