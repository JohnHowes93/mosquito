import styled from 'styled-components';

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 2rem 1fr 2rem;
    min-height: 1rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 12px;
    height:2rem;
    &:hover{
        background-color: whitesmoke;
    }
`;

export const DeleteButton = styled.button`
    border: 0;
    padding: 0.5rem;
    color: lightgray;
    background-color: transparent;
    border-radius: 5px;
    &:hover{
        background-color: lightgray;
        border: red;
        color:red;
    }
`;

export const TextContainer = styled.div`
    display: grid;
    align-content: center;
`;

export const TextInput = styled.input`
    font-family: inherit;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.25rem;
    &:hover{
        border: 1px solid lightgray
    }
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    color: ${(props) => (props.completed ? 'grey' : 'inherit')};

`;

export const MarkAsCompletedContainer = styled.div`
    display: grid;
    align-content: center;
`;
