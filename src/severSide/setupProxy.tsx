import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

const proxyMiddleware = createProxyMiddleware({
    target: 'https://www.jkrowling.com',
    changeOrigin: true
});

export const configureProxy = (app: Application) => {
    app.use('/api', proxyMiddleware);
};
