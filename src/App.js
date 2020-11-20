import {
  useDispatch,
  useSelector
} from 'react-redux';

import {set_dragon, add_dragon, delete_dragon, reverse, element} from './actions/actions-types'
import Button from 'react-bootstrap/Button';



const App = () => {

  const {dragons, count, dragon, message, element} = useSelector(state => state)

  const dispatch = useDispatch(); 

  const handleChange = event => {
    const {value, name} = event.target

    dispatch(set_dragon({ value, name }))
  }

  const onChangeElem = event =>{
    const {value} = event.target
    dispatch(element({value}))
  }

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(add_dragon())
  }

  

  return (
    <div className="App ">
      <div className='container d-flex flex-row ml-3 mr-0 mt-5'>
        <div className="col-9">
          <h2>Dragon's store</h2>
          {message && 
            <div className="alert alert-warning">{message}</div>
          }
          
          <form onSubmit={handleSubmit}>
          
            <div className='form-group'>
              <label htmlFor="name">Add a dragon</label>
              <input
                type='text'
                id='name'
                className='form-control'
                name = 'dragon'
                value={dragon}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <select className='custom-select' name='element' value={element} onChange={onChangeElem}>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Ice">Ice</option>
              </select>
            </div>

            <Button type='submit' className='btn btn-primary'> Add to store </Button>
          </form>
        </div>
        <div className="col-6 ml-3 mt-5">
          <p>Number of dragons in the store : {count} </p>
          <Button className='btn btn-secondary mb-3' onClick={() => dispatch(reverse())}>Reverse list</Button>
          <div>
            <table className="table table-borderless table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Element</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {dragons.map((dragon, i) => 
                <tr key={i}>
                  <th>{dragon}</th>
                <th>{element}</th>
                  <th><Button className='btn btn-danger' onClick={() => dispatch(delete_dragon(dragon))}>Delete</Button></th>
                </tr>
                )}
              </tbody>
            </table>
            {/* <ul className='list-group'>
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
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
