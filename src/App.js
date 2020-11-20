import {
  useDispatch,
  useSelector
} from 'react-redux';
import styled from 'styled-components'
import dragonlogo from './dragon.png'

import {set_dragon, add_dragon, delete_dragon, reverse} from './actions/actions-types'


const Img = styled.img`
  display : inline;
  width : 60px;
`;

const H1 = styled.h1`
  font-size : 3rem;
  font-weight : bold;
  color : #64B052;
  margin-left : 15px;

`
const Button = styled.button`
  background-color : #64B052;
  color : white;
  border : none;

  &:hover{
    color : white;
    background-color : #438034;
  };
  
`


const App = () => {

  const {dragons, count, dragon, message} = useSelector(state => state)

  const dispatch = useDispatch(); 

  const handleChange = event => {
    const {value, name} = event.target

    dispatch(set_dragon({ value, name }))
  }

 

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(add_dragon())
  }

  

  return (
    <div className="App ">
      <div className='container d-flex flex-row ml-3 mr-0 mt-5'>
        <div className="col-9">
          <div className="row mb-3">
            <Img src={dragonlogo} className='App-logo'/>
            <H1>Dragon's shelter</H1>
          </div>
          
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

            <Button type='submit' className='btn'> Add to store </Button>
          </form>
        </div>
        <div className="col-6 ml-3 mt-5">
          <p>Number of dragons in the shelter : {count} </p>
          <Button className='btn mb-3' onClick={() => dispatch(reverse())}>Reverse list</Button>
          <div>
            <table className="table table-borderless table-striped">
              <thead>
                <tr>
                  <th className="col-6">Name</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {dragons.map((dragon, i) => 
                <tr key={i}>
                  <th>{dragon}</th>
                  <th><Button className='btn' onClick={() => dispatch(delete_dragon(dragon))}>X</Button></th>
                </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
