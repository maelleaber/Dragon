import {
  useDispatch,
  useSelector
} from 'react-redux';

import {set_dragon, add_dragon, delete_dragon, reverse} from './actions/actions-types'
import Button from 'react-bootstrap/Button';



const App = () => {

  const {dragons, count, dragon, message} = useSelector(state => state)

  const dispatch = useDispatch(); 

  const handleChange = event => {
    const {value, name} = event.target

    dispatch(set_dragon({ value, name }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(add_dragon(dragon))
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>Dragon's store</h2>
        {message && 
          <div className="alert alert-warning">{message}</div>
        }
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
      <label htmlFor="name">Add a dragon : {dragon}</label>
            <input
              type='text'
              id='name'
              className='form-control'
              name = 'dragon'
              value={dragon}
              onChange={handleChange}
            />
          </div>
          <Button type='submit' className='btn btn-primary'> Add to store </Button>
        </form>
        <div className="mt-5">
          <p>Number of dragons in the store : {count} </p>
          <Button className='btn btn-secondary mb-3' onClick={() => dispatch(reverse())}>Reverse list</Button>
          <div>
            <ul className='list-group'>
              {dragons.map((dragon, i) => 
                <li className='list-group-item' key={i}> 
                  {dragon} 
                  <Button
                    className='btn btn-danger ml-3'
                    onClick={() => dispatch(delete_dragon(dragon))}
                  >
                    Delete
                  </Button>
                </li>

              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
