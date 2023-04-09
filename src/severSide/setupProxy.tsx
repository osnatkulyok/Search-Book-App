import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

const proxyMiddleware = createProxyMiddleware({
    target: 'https://www.jkrowling.com',
    changeOrigin: true
});

export const configureProxy = (app: Application) => {
    app.use('/api', proxyMiddleware);
};
// ////////////////
// import express from 'express';
// import { createProxyMiddleware, Options } from 'http-proxy-middleware';

// const app = express();

// // Proxy middleware configuration
// const options: Options = {
//     target: 'https://www.jkrowling.com',
//     changeOrigin: true,
//     pathRewrite: {
//         '^/api/proxy': '', // remove /api/proxy from the URL
//     },
//     onProxyRes: (_proxyRes, req, res) => {
//         // Add CORS headers to the response
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
//         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//         res.setHeader('Access-Control-Allow-Credentials', 'true');
//     },
// };
// const httpProxyMiddleware = createProxyMiddleware(options);
// app.use('/api/proxy', httpProxyMiddleware);

// app.listen(3001, () => {
//     console.log('Proxy server listening on port 3001');
// });
////////////////////
// import express from 'express';
// import { createProxyMiddleware } from 'http-proxy-middleware';

// const app = express();

// app.use('/book', createProxyMiddleware({
//     target: 'https://www.jkrowling.com',
//     changeOrigin: true,
// }));

// app.listen(3001, () => {
//     console.log('Proxy server listening on port 3001');
// });
//////////////////
// import axios from 'axios';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const targetUrl = 'https://www.jkrowling.com/book/harry-potter-philosophers-stone/';

// axios.get(proxyUrl + targetUrl)
//     .then((response: { data: any; }) => {
//         console.log(response.data);
//     })
//     .catch((error: any) => {
//         console.error(error);
//     });
///////////////////////
