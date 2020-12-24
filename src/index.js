import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import HomePage from "./pages/HomePage";
import './App.css';

const client = new ApolloClient({
  uri: 'https://4emsv94v.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage/>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <App/>, document.getElementById('root')
);
