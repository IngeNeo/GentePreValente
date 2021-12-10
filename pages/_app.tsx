import '../styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useEstado, StateContext } from 'context/stateContext';

const client = new ApolloClient({
	//uri: 'http://localhost:3000/api/graphql',
	uri: 'https://gente-prevalente-bsbc2iixq-ingeneo.vercel.app/api/graphql',
	cache: new InMemoryCache(),
});



function MyApp({ Component, pageProps }: AppProps) {

	const [useEstado, setUseEstado] = useState({});

	return (
				<ApolloProvider client={client}>
					<StateContext.Provider value={{ useEstado, setUseEstado }}>
						<Component {...pageProps} />
					</StateContext.Provider>
				</ApolloProvider>
	)
}

export default MyApp
