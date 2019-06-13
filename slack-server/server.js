import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import TYPEDEFS from './schema';
import RESOLVERS from './resolvers';
import models from './models';

const APP = express();

const SERVER = new ApolloServer({
    typeDefs: TYPEDEFS,
    resolvers: RESOLVERS,
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