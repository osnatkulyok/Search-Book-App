"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureProxy = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
const proxyMiddleware = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: 'https://www.jkrowling.com',
    changeOrigin: true
});
const configureProxy = (app) => {
    app.use('/api', proxyMiddleware);
};
exports.configureProxy = configureProxy;
