import { Test, TestingModule } from '@nestjs/testing';

import { PageOne } from '@nx-toh/shared/models';

import { DemoOneController } from './demo-one.controller';
import { DemoOneService } from './demo-one.service';

const mockPageOne: PageOne = {
  param: 'page-one',
  name: 'Page 1',
  content: 'Page 1 content...',
  accordionItems: [
    { header: 'header 1', content: 'content 1' },
    { header: 'header 2', content: 'content 2' },
    { header: 'header 3', content: 'content 3' }
  ]
};

describe('DemoOneController', () => {
  let clientService: DemoOneService;
  let module: TestingModule;
  let clientController: DemoOneController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DemoOneController],
      providers: [DemoOneService]
    }).compile();

    clientService = module.get<DemoOneService>(DemoOneService);
    clientController = module.get(DemoOneController);

    jest.spyOn(clientService, 'getPages').mockReturnValue(mockPageOne);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getPages', () => {
    it('should return an entity of client if successful', () => {
      expect(clientController.getPages('page-one')).toBe(mockPageOne);
    });

    it('should throw NotFoundException if client not found', () => {
      expect(clientController.getPages('test')).not.toBe(mockPageOne);
    });
  });
});
