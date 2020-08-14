import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from 'nestjs-pino';
import { LoggerController } from './logger.controller';

describe('LoggerController', () => {
  let clientService: Logger;
  let module: TestingModule;
  let clientController: LoggerController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [LoggerController],
      providers: [Logger]
    }).compile();

    clientService = module.get<Logger>(Logger);
    clientController = module.get(LoggerController);

    jest.spyOn(clientService, 'error');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('logError', () => {
    it('should log error when called', () => {
      clientController.logError('test');
      expect(clientController.logError).toHaveBeenCalled();
    });
  });
});
