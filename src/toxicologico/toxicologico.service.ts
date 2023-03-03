import { Injectable } from '@nestjs/common';
import { Laudo } from './entity';

@Injectable()
export class ToxicologicoService {
  intoxicado(_laudotDto: Laudo) {
    if (
      _laudotDto.Metanfetamina >= 0.2 ||
      _laudotDto.Anfetamina >= 0.2 ||
      _laudotDto.MDA >= 0.2 ||
      _laudotDto.MDMA >= 0.2 ||
      _laudotDto.THC >= 0.05 ||
      _laudotDto.Morfina >= 0.2 ||
      _laudotDto.Codeína >= 0.2 ||
      _laudotDto.Heroína >= 0.2 ||
      (_laudotDto.Cocaína >= 0.5 &&
        (_laudotDto.Benzoilecgonina >= 0.05 ||
          _laudotDto.Cocaetileno >= 0.05 ||
          _laudotDto.Norcocaína >= 0.05))
    ) {
      return true;
    } else {
      return false;
    }
  }
}
