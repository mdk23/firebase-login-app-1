 
import './App.css';
import {signInWithGoogle} from './Firebase'
import './App.css'
function App() {
  return (
     <div className='App'> 
        <button onClick={signInWithGoogle}>Sign In with Google</button>
        <h1>{localStorage.getItem("name") }</h1>
        <h1>{localStorage.getItem("email") }</h1>
        <img src={localStorage.getItem("profile_pic")} alt=" nada"/>
     </div>
  );
}

export default App;
