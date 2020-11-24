import { HttpModule, Module } from '@nestjs/common';

import { DemoOneController } from './demo-one.controller';
import { DemoOneService } from './demo-one.service';

@Module({
  imports: [HttpModule],
  controllers: [DemoOneController],
  providers: [DemoOneService]
})
export class DemoOneModule {}
