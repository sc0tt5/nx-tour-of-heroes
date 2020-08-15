import { Body, Controller, Logger, Post } from '@nestjs/common';

@Controller()
export class LoggerController {
  @Post('log')
  logError(@Body() error: any): void {
    Logger.error(error, null, 'ClientError');
  }
}
