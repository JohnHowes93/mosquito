import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Layout = styled.div`
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
`

const DeleteButton = styled.button`
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
`

const TextContainer = styled.div`
    display: grid;
    align-content: center;
`

const TextInput = styled.input`
    font-family: inherit;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.25rem;
    &:hover{
        border: 1px solid lightgray
    }
`

const MarkAsCompletedContainer = styled.div`
    display: grid;
    align-content: center;
`



export default ({text = '', completed = false, lists, setLists, id, itemID}) => {

    const handleChangeText = (e) => {
        const editedListItem = {...lists[id].items, text: e.target.value}
        const newListItems = {...lists[id].items, [itemID] : editedListItem}
        const newList = {...lists[id], items: newListItems}
        setLists({...lists, [id] : newList})
    }

    const handleDeleteItem = () => {
        let newListItems = {...lists[id].items}
        delete newListItems[itemID]
        const newList = {...lists[id], items: newListItems}
        setLists({...lists, [id] : newList})
    }

    return (
    <Layout>
        <MarkAsCompletedContainer>
            <input type='checkbox' id='completed' />
        </MarkAsCompletedContainer>
        <TextContainer>
            <TextInput value={text} onChange={handleChangeText}></TextInput>
        </TextContainer>
        <div>
            <DeleteButton onClick={handleDeleteItem}>
                <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
        </div>
    </Layout>
    )
}