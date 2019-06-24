import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import 'semantic-ui-css/semantic.min.css';

import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8181/graphql'
});

const client = new ApolloClient({
    networkInterface
});

const App = (
    <ApolloProvider>
        <Routes />
    </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
