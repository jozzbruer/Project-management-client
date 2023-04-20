import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENTS } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientsQuery';

const ClientRow = ({ client }) => {
	const [deleteClient] = useMutation(DELETE_CLIENTS, {
		variables: { id: client.id },
		update(cache, { data: { deleteClient } }) {
			const { clients } = cache.readQuery({ query: GET_CLIENTS });
			cache.writeQuery({
				query: GET_CLIENTS,
				data: {
					clients: clients.filter((client) => client.id !== deleteClient.id),
				},
			});
		},
	});
	return (
		<tr>
			<td>{client.name}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<th>
				<button className='btn btn-danger btn-sm' onClick={deleteClient}>
					<FaTrash />
				</button>
			</th>
		</tr>
	);
};

export default ClientRow;
