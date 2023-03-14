export const env = {
  node: process.env.REACT_APP_NODE_ENV || 'development',
  
  app: {
    name: 'bounce-app',
    host: process.env.REACT_APP_APP_HOST || 'http://localhost',
    port: process.env.REACT_APP_APP_PORT || '3000',
    apiHost: process.env.REACT_APP_API_HOST || 'http://localhost:3050/api',
  },
};
