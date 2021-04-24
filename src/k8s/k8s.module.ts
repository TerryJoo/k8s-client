import { DynamicModule, HttpModule, Module } from '@nestjs/common';
import { K8sService } from './k8s.service';
import { K8S_API_URL_PROVIDER, K8S_TOKEN_PROVIDER } from './k8s.constants';
import { K8sModuleOptions } from './k8s.types';

@Module({})
export class K8sModule {
  static forRoot(
    clusterApiUrl: string,
    options?: K8sModuleOptions,
  ): DynamicModule {
    const k8sService = {
      provide: options?.name ? options.name : K8sService,
      useClass: K8sService,
    };
    return {
      module: K8sModule,
      global: true,
      providers: [
        k8sService,
        { provide: K8S_API_URL_PROVIDER, useValue: clusterApiUrl },
        { provide: K8S_TOKEN_PROVIDER, useValue: options?.accessToken || null },
      ],
      imports: [HttpModule],
      exports: [k8sService],
    };
  }
}
