import express from 'express';

import SERVER from './schema';

const APP = express();

SERVER.applyMiddleware({
    app: APP
});

const PORT = 8181 || process.env;;

APP.listen(PORT, () => {
    console.log(`The server has started on port: ${PORT}`);
    console.log(`http://localhost:${PORT}/graphql`);
});

export default APP;