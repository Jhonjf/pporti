// src/App.tsx
import React from 'react';
import { Formulario } from './components/Formulario';
import { Cabecalho } from './components/Cabecalho';
import { Hero } from './components/Hero';
import { Vaga } from './components/Vaga';
import { ListaVagas } from './components/ListaVaga';

const App: React.FC = () => {
  return (
    <div>
      <Cabecalho>Meu Cabeçalho</Cabecalho>
      <Hero>Meu Hero</Hero>
      <Formulario>Meu Formulário</Formulario>
      <Vaga>Minha Vaga</Vaga>
      <ListaVagas>
        <Vaga>Vaga 1</Vaga>
        <Vaga>Vaga 2</Vaga>
        <Vaga>Vaga 3</Vaga>
        {/* Adicione mais vagas conforme necessário */}
      </ListaVagas>
    </div>
  );
};

export default App;
