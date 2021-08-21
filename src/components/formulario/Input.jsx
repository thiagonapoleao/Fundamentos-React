import React, { useState } from 'react'
import "./Input.css"
export default props => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input" >
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} />  {/*Componentes contralados */}
                <input value={valor} readOnly />  {/*Componentes só de leitura */}
                <input value={undefined} />      {/*Componentes não contralados */}
             
            </div>
        </div>
    )
}