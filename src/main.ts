import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { HttpExceptionFilter } from 'nest-problem-details-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Config da porta
  const port = process.env.PORT ?? 8080;

  // Config do Swagger
  const config = new DocumentBuilder()
    .setTitle('ReloFlow - With NestJS')
    .setDescription('API para uma app de Relocation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document); // Acessa em /api

  app.enableCors();
  app.use(helmet());
  app.useGlobalFilters(new HttpExceptionFilter(app.get(HttpAdapterHost)));

  await app.listen(port);

  console.log(`App rodando na porta ${port}`);
  console.log(`Swagger em http://localhost:${port}/api`);
}
bootstrap();
