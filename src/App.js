import { useState } from "react"
import './App.css';

export default function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(num1 * num2);
   


    function multi() {
    
        setResult(num1 * num2)

    }



    return <div class="container">
        <h1>Calculadora</h1>
        <label>Primeiro Número</label>
        <input
        type="number"
        placeholder="0"
        value={num1}
        onChange={e => setNum1(+e.target.value)}>

        </input>

        <label>Segundo Número</label>

        <input
        type="number"
        placeholder="0"
        value={num2}
        onChange={e => setNum2(+e.target.value)}>
            
        </input>

        
        <button class="button button1" onClick={multi} >Calcular</button> <br></br>
        
        <h1>{result}</h1>
        
    </div>
}
