import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, login, logout} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Counnter {counter}</p>
      <button onClick={() => {dispatch(increment(5))}}>+</button>
      <button onClick={() => {dispatch(decrement(3))}}>-</button>
      {isLogged? 
        <p>
          You are logged in
          <button onClick={() => {dispatch(logout())}}>Logout</button>
        </p>: 
        <p>
          You are not logged
          <button onClick={() => {dispatch(login())}}>Login</button>
        </p>
      }
    </div>
  );
}

export default App;
