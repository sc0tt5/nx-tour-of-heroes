import { Body, Controller, Logger, Post } from '@nestjs/common';

@Controller('log')
export class LoggerController {
  constructor(private readonly logger: Logger) {}

  @Post()
  logError(@Body() error: unknown): void {
    this.logger.error(error, undefined, 'ClientError');
  }
}
