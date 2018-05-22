export interface AsyncStore {
  isLoading: boolean;
  hasLoaded: boolean;
  hasFailed: boolean;
}

export interface RequestOptions {
  path: string;
  options: RequestInit;
  handle401: boolean;
}

export interface GenerateOptions {
  method?: string;
  path: string;
  query?: any;
  body?: object;
  withAuth?: boolean;
}

export interface ApiHelper {
  get: (options: GenerateOptions) => Promise<any>;
  del: (options: GenerateOptions) => Promise<any>;
  post: (options: GenerateOptions) => Promise<any>;
  put: (options: GenerateOptions) => Promise<any>;
  patch: (options: GenerateOptions) => Promise<any>;
}
