import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, canselField} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = event => {
		event.preventDefault();
		const {name, value} = event.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = event => {
			event.preventDefault();
			dispatch(addService(item.id, item.name, item.price));
	}

	const handleCansel = event => {
		event.preventDefault();
		dispatch(canselField());
	}

	return (
		<div className='ServiceAdd-box'>
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
		</form>
			<button type='button' onClick={handleCansel}>Cansel</button>
		</div>
	);
}

export default ServiceAdd;