import express from 'express';
import path from 'path'
import { ApolloServer } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';
import cors from 'cors';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const APP = express();
APP.use(cors('*'));

const SERVER = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: {
        endpoint: `http://localhost:8181/graphql`,
        settings: {
            'editor.theme': 'light'
        }
    }
});

SERVER.applyMiddleware({
    app: APP
});

const PORT = 8181 || process.env;;

models.sequelize.sync({ force: true }).then(() => {
    APP.listen(PORT, () => {
        console.log(`The server has started on port: ${PORT}`);
        console.log(`http://localhost:${PORT}/graphql`);
    });  
});

export default APP;