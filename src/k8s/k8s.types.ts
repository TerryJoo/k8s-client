export type K8sModuleOptions = {
  /**
   * Cluster identifier for you and nestjs system. This is NOT Cluster ID.
   *
   * default: 'k8s_default'
   */
  name?: string;
  accessToken?: string;
};

export type K8sGetApisResult = {
  /**
   * examples: ["/api", "/api/v1", "/apis", "/apis/" ... ]
   */
  paths: string[];
};
