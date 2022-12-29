import { Body, Controller, Logger, Post } from '@nestjs/common';

@Controller()
export class LoggerController {
  @Post('log')
  logError(@Body() error: unknown): void {
    Logger.error(error, undefined, 'ClientError');
  }
}
