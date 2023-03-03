import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToxicologicoModule } from './toxicologico/toxicologico.module';

@Module({
  imports: [ToxicologicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
