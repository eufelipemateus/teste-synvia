import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Laudo, RespostaLaudo, Status } from './entity';
import { ToxicologicoService } from './toxicologico.service';

@UseGuards(JwtAuthGuard)
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
