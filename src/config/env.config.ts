export const EnvConfiguration = () => ({
  //* Mapeamos a un obj nuestros env. Esta config funciona dentro de los building blocks de Nest
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3000,
  defaultLimit: +process.env.DEFAULT_LIMIT || 7,
});
