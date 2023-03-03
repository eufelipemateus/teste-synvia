import { Test, TestingModule } from '@nestjs/testing';
import { Laudo } from './entity';
import { ToxicologicoService } from './toxicologico.service';

describe('ToxicologicoService', () => {
  let service: ToxicologicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToxicologicoService],
    }).compile();

    service = module.get<ToxicologicoService>(ToxicologicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('Teste Negativo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0,
      Metanfetamina: 0,
      MDA: 0,
      MDMA: 0,
      THC: 0,
      Morfina: 0,
      Codeína: 0,
      Heroína: 0,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeFalsy();
  });

  test('Teste Cocaina Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0.5,
      Anfetamina: 0,
      Metanfetamina: 0,
      MDA: 0,
      MDMA: 0,
      THC: 0,
      Morfina: 0,
      Codeína: 0,
      Heroína: 0,
      Benzoilecgonina: 0.05,
      Cocaetileno: 0.05,
      Norcocaína: 0.05,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });

  test('Teste Anfetamina Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0.2,
      Metanfetamina: 0,
      MDA: 0,
      MDMA: 0,
      THC: 0,
      Morfina: 0,
      Codeína: 0,
      Heroína: 0,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });

  test('Teste Metanfetamina Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0,
      Metanfetamina: 0.2,
      MDA: 0,
      MDMA: 0,
      THC: 0,
      Morfina: 0,
      Codeína: 0,
      Heroína: 0,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });

  test('Teste MDA Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0,
      Metanfetamina: 0,
      MDA: 0.2,
      MDMA: 0,
      THC: 0,
      Morfina: 0,
      Codeína: 0,
      Heroína: 0,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });

  test('Teste MDMA Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0,
      Metanfetamina: 0,
      MDA: 0,
      MDMA: 0.2,
      THC: 0,
      Morfina: 0,
      Codeína: 0,
      Heroína: 0,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });

  test('Teste THC Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0,
      Metanfetamina: 0,
      MDA: 0,
      MDMA: 0,
      THC: 0.05,
      Morfina: 0,
      Codeína: 0,
      Heroína: 0,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });

  test('Teste Morfina Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0,
      Metanfetamina: 0,
      MDA: 0,
      MDMA: 0,
      THC: 0,
      Morfina: 0.2,
      Codeína: 0,
      Heroína: 0,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });

  test('Teste Codeína Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0,
      Metanfetamina: 0,
      MDA: 0,
      MDMA: 0,
      THC: 0,
      Morfina: 0,
      Codeína: 0.2,
      Heroína: 0,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });

  test('Teste Heroína Positivo', () => {
    const laudoDto: Laudo = {
      codigo_amostra: '02338332',
      Cocaína: 0,
      Anfetamina: 0,
      Metanfetamina: 0,
      MDA: 0,
      MDMA: 0,
      THC: 0,
      Morfina: 0,
      Codeína: 0,
      Heroína: 0.2,
      Benzoilecgonina: 0,
      Cocaetileno: 0,
      Norcocaína: 0,
    };

    expect(service.intoxicado(laudoDto)).toBeTruthy();
  });
});
