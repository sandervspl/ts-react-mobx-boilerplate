export const env = process.env.NODE_ENV || 'development';

export const port = {
  client: process.env.PORT || 3000,
  server: 4000,
  api: 8080,
};

export const api = {
  production: `http://localhost:${port.api}/api/v1/`,
  development: `http://localhost:${port.api}/api/v1/`,
}[env];
