import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/employees', router);
server.listen(process.env.PORT || 3001, () => {
    console.log('JSON Server is running');
});