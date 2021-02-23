import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let Nayok = ["Dr Mahfuzur Rahman","Alomgir","Bappa Raj","Shakib"];
function App() {
    return ( 
        <div className = "App" >
        <header className = "App-header">
            <p>I am a react developer</p>
            <AddPeople></AddPeople>

        </header>
        </div>
    );
}

function AddPeople(props){
    const [count,setCount] = useState(10);
    const inCrease = () => setCount (count + 1);
    const decrease = () => setCount (count - 1);
    return (
        <div style={{border:"2px solid grey", padding:"30px", margin:"10px"}}>
            <h4>count:{count}</h4>
            <button onMouseMove={inCrease}>Increase</button>
            <button onMouseMove={decrease}>Decrease</button>
        </div>
    )
}

export default App;