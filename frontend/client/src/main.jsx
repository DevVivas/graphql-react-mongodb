import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_URI || 'http://localhost:3004/graphql'
});
createRoot(document.getElementById('root')).render(
    <StrictMode>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
    </StrictMode>,
)