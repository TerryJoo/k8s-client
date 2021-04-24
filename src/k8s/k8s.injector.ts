import { Inject } from '@nestjs/common';
import { K8sService } from './k8s.service';

export function InjectK8s(name = K8sService) {
  return Inject(name);
}
