import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { v1 as uuid } from 'uuid';


import ListItem from './ListItem'
import Tag from './Tag'

const Layout = styled.div`
    display: grid;
    grid-template-rows: 5rem 1fr 2.5rem;
    min-height: 5rem;
    padding: 1rem;
    margin: 0.5rem;
`

const TitleContainer = styled.div`
    padding: 1rem;
    align-items: center;
    border: 1px solid grey;
    border-radius: 4px;
`

const ItemsContainer = styled.div`
    display:grid;
    min-height: 12rem;
    border: 1px solid grey;
    border-radius: 4px;
    border-top: 0;
    border-bottom: 0;
`

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid grey;
    border-radius: 4px;
    overflow-y: auto;
`

const NewItemButton = styled.button`
    font-family: inherit;
    justify-self: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 1.5rem;
    background-color: #B8EBD0;
    border-radius: 8px;
    border: 0;
`

const CreateNewListItemIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

export default ({title = '', items = [], tags = [], id, setLists, lists}) => {

    const defaultListItem = {
        text: '', completed: false 
    }

    const addNewItem = () => {
        const newUUID = uuid()
        const newItemsList = {...lists[id].items, [newUUID] :defaultListItem}
        const newList = {...lists[id], items : newItemsList}
        setLists({...lists, [id]: newList})
    }

    return (
    <Layout>
        <TitleContainer><p>{title}</p></TitleContainer>
        <ItemsContainer>
            {Object.keys(items).map((key) => <ListItem setLists={setLists} lists={lists} id={id} text={items[key].text} itemID={key} completed={items[key].completed} />)}
            <NewItemButton onClick={addNewItem}>
            <CreateNewListItemIcon icon={faPlus} />
                New Item
                </NewItemButton>
        </ItemsContainer>
        <TagContainer>
            {tags.map((tag) => <Tag text={tag} />)}
        </TagContainer>
    </Layout>
    )
}