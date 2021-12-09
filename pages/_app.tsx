import '../styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	//uri: 'http://localhost:3000/api/graphql',
	uri: 'https://gente-prevalente-bsbc2iixq-ingeneo.vercel.app/api/graphql',
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
	)
}

export default MyApp
