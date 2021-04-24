import { Module } from '@nestjs/common';
import { K8sModule } from './k8s/k8s.module';

@Module({
  imports: [K8sModule.forRoot('http://localhost:8001')],
})
export class AppModule {}
