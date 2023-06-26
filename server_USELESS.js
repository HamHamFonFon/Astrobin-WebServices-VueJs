const { createServer } = require('http');
const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const { createRouter } = require('./src/router');
const { createStore } = require('./src/stores');
const App = require('./src/App.vue').default;

const server = createServer();

server.on('request', async (req, res) => {
    const app = createSSRApp(App);
    const router = createRouter();
    const store = createStore();

    app.use(router);
    app.use(store);

    router.push(req.url);
    await router.isReady();

    try {
        const html = await renderToString(app);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


