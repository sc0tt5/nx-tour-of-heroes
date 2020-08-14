import { Body, Controller, Post } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

@Controller()
export class LoggerController {
  constructor(private readonly logger: Logger) {}

  @Post('log')
  logError(@Body() error: any): void {
    this.logger.error(error);
  }
}
