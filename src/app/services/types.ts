export interface JWTokenService {
  get: () => string | null;
  set: (data: any) => void;
  clear: () => void;
}
