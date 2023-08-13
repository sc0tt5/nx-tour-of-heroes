import { Logger } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { LoggerController } from './logger.controller';

describe('LoggerController', () => {
  let controller: LoggerController;
  let logger: Logger;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [LoggerController],
      providers: [Logger]
    }).compile();

    controller = module.get(LoggerController);
    logger = module.get(Logger);
  });

  describe('logError', () => {
    it('should log error', () => {
      const error = jest.spyOn(logger, 'error');
      controller.logError('test');
      expect(error).toHaveBeenCalled();
    });
  });
});
