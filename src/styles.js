import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Layout = styled.div`
  font-family: Roboto;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 60% 1fr;
  grid-template-rows: 1fr 80% 1fr;
  height: 100%;
  width: 100%;
`;

export const AppContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 5rem 1fr;
  border: 1px solid grey;
  border-radius: 12px;
  background-color: #F8F8F8;
`;

export const CreateNewListButton = styled.button`
 font-family: inherit;
 background-color: #B8EBD0;
 padding: 1rem;
 border-radius: 8px;
 border: 0;
 &:hover{
   border: 1px solid grey;
 }
`;

export const CreateNewListIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid grey;
  
`;

export const ListsContainer = styled.div`
  overflow-y: auto;
`;
