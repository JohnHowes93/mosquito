import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import List from './components/List'

const Layout = styled.div`
  font-family: Roboto;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 60% 1fr;
  grid-template-rows: 1fr 80% 1fr;
  height: 100%;
  width: 100%;
`

const AppContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 5rem 1fr;
  border: 1px solid grey;
  border-radius: 12px;
`

const CreateNewListButton = styled.button`
 font-family: inherit;
 background-color: #B8EBD0;
 padding: 1rem;
 border-radius: 8px;
 border: 0;
`

const CreateNewListIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const ButtonContainer= styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid grey;
`

const ListsContainer = styled.div`
  overflow-y: auto;
`

function App() {
  const [lists, setLists] = useState({
    0 : {
    title: 'Title',
    tags: ['tag 1', 'tag 2', 'tag 3'],
    items: [{
      text: 'example text',
      completed: false
    },
    {
      text: 'example text 2',
      completed: true
    } 
  ]
  }
})

  const defaultListItem = {
    title: 'Title',
    tags: ['tag 1', 'tag 2', 'tag 3'],
    items: {
      0 : {
      text: 'example text',
      completed: false
    },
    1: {
      text: 'example text 2',
      completed: true
    } 
    }
  }

  return (
      <Layout>
        <AppContainer>
          <ButtonContainer>
            <CreateNewListButton onClick={ () => setLists({...lists, [Object.keys(lists).length] : defaultListItem })}>
              <CreateNewListIcon icon={faPlus} />
              Create A New List
            </CreateNewListButton>
          </ButtonContainer>
          <ListsContainer>
            {Object.keys(lists).map((key)=> 
            <List 
              id={key} 
              title={lists[key].title} 
              tags={lists[key].tags} 
              items={lists[key].items}
              setLists={setLists}
              lists={lists}
            />)}
          </ListsContainer>
        </AppContainer>
      </Layout>
  );
}

export default App;
