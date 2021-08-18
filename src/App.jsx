import React from 'react'
import './App.css'

import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMenbro from './components/basico/FamiliaMenbro'
import Famila from './components/basico/Famila'
import Card from './components/layout/Card'
import Aleatorio from './components/basico/Aleatorio'
import Fragmenento from './components/basico/Fragmento'
import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametro'




export default () => (
    <div className="app">
        <h1>Fundamesntos React</h1>


        <div className="Cards">
            <Card titulo=" #8 - Renderização Condicional" color="#6A5ACD">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: ' Thiago '  }} />
                <UsuarioInfo usuario={{ }} />
                <UsuarioInfo/>
            </Card>

            <Card titulo=" #7 - Desafio de Repetição" color="#00FF7F">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo=" #6 - Repetição" color="#00BFFF">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo=" #5 - Componente com Filho" color="#800080">
                <Famila sobrenome="Napoleão">
                    <FamiliaMenbro nome="Thiago" />
                    <FamiliaMenbro nome="Taty" />
                    <FamiliaMenbro nome="Isabelli" />
                </Famila>
            </Card>

            <Card titulo=" #4 - Desafio Aleatorio" color="#CD5C5C">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#3 - Fragmenento" color="#00FF00">
                <Fragmenento />
            </Card>

            <Card titulo="#2 - ComParametro" color="#008080">
                <ComParametro
                    titulo="Situação do Aluno   "
                    aluno="Thiago"
                    nota={9.3}
                />
            </Card>

            <Card titulo=" #1 - Primeiro Componente" color="#FF00FF">
                <Primeiro />
            </Card>
        </div>
    </div>
)