import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {
  removeService, 
  editService, 
  fetchServicesSuccess, 
  fetchServicesRequest,
  fetchServicesFailure,
  fetchServicesRemove,
  fetchServices} from '../actions/actionCreators';

// const fetchServices = async(dispatch) => {
//   try {
//     // throw new Error('Ошибка');
//     dispatch(fetchServicesRequest())
//     const response = await fetch(process.env.REACT_APP_API_URL);
//     const services = await response.json();
//     dispatch(fetchServicesSuccess(services));
//   } catch (error){
//     dispatch(fetchServicesFailure(error.message))
//   }
// };

function ServiceList() {
  const {items, loading, error}  = useSelector(state => state.serviceList);
  const dispatch = useDispatch();


  useEffect(() => {
    fetchServices(dispatch);
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  const handleRemove = (id) => {
      fetch( dispatch(fetchServicesRemove(id)))
      .catch (fetchServices(dispatch));    
  }

  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id, o.name, o.price)}>Edit</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList