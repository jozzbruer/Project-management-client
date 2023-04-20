import AddClientModal from './components/AddClientModal';
import Clients from './components/Clients';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				clients: {
					merge(existing, incoming) {
						return incoming;
					},
				},
				projects: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});
const client = new ApolloClient({
	uri: 'http://localhost:3001/graphql',
	cache,
});
function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<div className='container'>
					<Header />
					<AddClientModal />
					<Clients />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;
