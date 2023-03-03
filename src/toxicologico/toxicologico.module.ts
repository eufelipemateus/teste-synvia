import { Module } from '@nestjs/common';
import { ToxicologicoController } from './toxicologico.controller';
import { ToxicologicoService } from './toxicologico.service';

@Module({
  controllers: [ToxicologicoController],
  providers: [ToxicologicoService],
})
export class ToxicologicoModule {}
