import { Test, TestingModule } from '@nestjs/testing';
import { Laudo, RespostaLaudo, Status } from './entity';
import { ToxicologicoController } from './toxicologico.controller';
import { ToxicologicoService } from './toxicologico.service';

describe('ToxicologicoController', () => {
  let controller: ToxicologicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToxicologicoController],
      providers: [ToxicologicoService],
    }).compile();

    controller = module.get<ToxicologicoController>(ToxicologicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
