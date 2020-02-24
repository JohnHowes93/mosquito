import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Layout = styled.div`
    display: grid;
    grid-template-rows: 5rem 1fr 4rem;
    min-height: 5rem;
    padding: 1rem;
    margin: 0.5rem;
`;

export const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2rem;
    padding: 1rem;
    align-items: center;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: white;
`;

export const ItemsContainer = styled.div`
    display:grid;
    min-height: 12rem;
    border: 1px solid grey;
    border-radius: 4px;
    border-top: 0;
    border-bottom: 0;
    background-color: white;
`;

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid grey;
    border-radius: 4px;
    overflow-y: auto;
    background-color: white;

`;

export const AddButton = styled.button`
    font-family: inherit;
    justify-self: center;
    margin: 0.5rem;
    height: 1.5rem;
    background-color: #B8EBD0;
    border-radius: 8px;
    border: 1px solid transparent;
    &:hover{
        border: 1px solid grey;
    }
`;

export const CreateNewListItemIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

export const DeleteButton = styled.button`
    border: 0;
    padding: 0.5rem;
    color: lightgray;
    background-color: transparent;
    border-radius: 5px;
    &:hover{
        background-color: RGBA(0, 0, 0, 0.1);
        border: red;
        color:red;
    }
`;

export const TextInput = styled.input`
    font-family: inherit;
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.25rem;
    &:hover{
        border: 1px solid lightgray;
    }
`;
