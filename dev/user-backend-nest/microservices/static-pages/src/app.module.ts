import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { StaticPagesModule } from './static-pages/static-pages.module';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] }), StaticPagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
