import { Test, TestingModule } from '@nestjs/testing';
import { Status } from './entity';
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

  test('Rota intoxicado', () => {
    const _laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0.678,
      Anfetamina: 0.1,
      Metanfetamina: 0.1,
      MDA: 0.1,
      MDMA: 0,
      THC: 0.1,
      Morfina: 0.1,
      Codeína: 0.1,
      Heroína: 0.1,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(controller.laudo(_laudo)).toEqual({
      codigo_amostra: '02338332',
      staatus: 'Positiva',
    });
  });
});
