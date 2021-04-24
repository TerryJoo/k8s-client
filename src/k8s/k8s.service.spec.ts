import { K8sService } from './k8s.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';

describe('K8sService', () => {
  let service: K8sService;

  beforeEach(async () => {
    const app = await NestFactory.create(AppModule);
    service = app.get<K8sService>(K8sService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service.getApis).toBeDefined();
  });

  it('get apis should be...', async () => {
    /**
     * response examples
     * { paths: ["/api", "/api/v1", "/apis", "/apis/" ... ]}
     */
    const response = await service.getApis();
    expect(typeof response === 'object').toBeTruthy();
    expect(response.paths.constructor.name === 'Array').toBeTruthy();
  });
});
