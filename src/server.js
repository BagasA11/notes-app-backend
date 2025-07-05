const Hapi = require('@hapi/hapi');
const routers = require('./route');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routers);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);

};

init();