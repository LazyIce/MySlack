import express from 'express';

import SERVER from './schema';
import models from './models';

const APP = express();

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