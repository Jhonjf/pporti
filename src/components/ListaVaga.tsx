// src/components/ListaVagas.tsx
import styled from 'styled-components';

export const ListaVagas = styled.div`
  /* Estilos para o componente ListaVagas */
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export {}; // Adicione esta linha para exportar um objeto vazio e tornar o arquivo um módulo
