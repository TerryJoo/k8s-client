import { NestFactory } from '@nestjs/core';
import { K8sModule } from './k8s/k8s.module';

async function bootstrap() {
  const app = await NestFactory.create(K8sModule);
  await app.listen(3000);
}
bootstrap();
