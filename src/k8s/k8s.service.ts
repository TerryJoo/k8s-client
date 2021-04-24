/**
 * Headers:
 * - Accept
 * - jweToken
 *
 *   MSG_TOKEN_EXPIRED_ERROR
 */
import { HttpService, Inject, Injectable, Logger } from '@nestjs/common';
import { K8S_API_URL_PROVIDER, K8S_TOKEN_PROVIDER } from './k8s.constants';
import { K8sGetApisResult } from './k8s.types';

@Injectable()
export class K8sService {
  @Inject(K8S_API_URL_PROVIDER) private apiUrl: string;
  @Inject(K8S_TOKEN_PROVIDER) private accessToken: string;
  @Inject(HttpService) private http: HttpService;

  async getApis(): Promise<K8sGetApisResult> {
    const paths = await this.http
      .get(this.apiUrl)
      .toPromise()
      .then((axiosRes) => {
        return axiosRes.data;
      });
    Logger.log(paths);
    return paths;
  }
}
