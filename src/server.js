const Hapi = require('@hapi/hapi');
const routers = require('./route');

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
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