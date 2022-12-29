import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { LoggerController } from './logger.controller';

describe('LoggerController', () => {
  let clientService: Logger;
  let module: TestingModule;
  let logger: LoggerController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [LoggerController],
      providers: [Logger]
    }).compile();

    clientService = module.get<Logger>(Logger);
    logger = module.get(LoggerController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('logError', () => {
    it('should log error when called', () => {
      const err = jest.spyOn(clientService, 'error');
      logger.logError('test');
      expect(err).toHaveBeenCalled();
    });
  });
});
