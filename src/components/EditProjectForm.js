import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { GET_PROJECT } from '../queries/projectQueries';
import { UPDATE_PROJECT } from '../mutations/projectMutations';

const EditProjectForm = ({ project }) => {
	const [name, setName] = useState(project.name);
	const [description, setDecription] = useState(project.description);
	const [status, setStatus] = useState('');

	const [updateProject] = useMutation(UPDATE_PROJECT, {
		variables: { id: project.id, name, description, status },
		refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
	});
	const onSubmit = (e) => {
		e.preventDefault();
		if (name === '' || description === '') {
			return;
		}
		updateProject(name, description, status);
	};
	return (
		<div className='mt-5'>
			<h3>Update Project</h3>
			<form onSubmit={onSubmit}>
				<div className='mb-3'>
					<label className='form-label'>Name</label>
					<input
						type='text'
						id='name'
						className='form-control'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Description</label>
					<textarea
						id='description'
						className='form-control'
						value={description}
						onChange={(e) => setDecription(e.target.value)}></textarea>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Status</label>
					<select
						className='form-select'
						id='status'
						value={status}
						onChange={(e) => setStatus(e.target.value)}>
						<option value='new'>Not Started</option>
						<option value='progress'>In Progress</option>
						<option value='completed '>Completed</option>
					</select>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default EditProjectForm;
