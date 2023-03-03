import { Body, Controller, Post } from '@nestjs/common';
import { Laudo, RespostaLaudo, Status } from './entity';
import { ToxicologicoService } from './toxicologico.service';

@Controller('toxicologico')
export class ToxicologicoController {
  constructor(private toxicologicoService: ToxicologicoService) {}
  @Post()
  laudo(@Body() _laudotDto: Laudo) {
    const resposta: RespostaLaudo = {
      codigo_amostra: _laudotDto.codigo_amostra,
      staatus: this.toxicologicoService.intoxicado(_laudotDto)
        ? Status.POSITIVA
        : Status.NEGATIVA,
    };

    return resposta;
  }
}
