import React, { useState, useEffect } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { v1 as uuid } from 'uuid';

import {
  Layout, AppContainer, ButtonContainer, CreateNewListButton, CreateNewListIcon, ListsContainer,
} from './styles';
import List from './components/List';

function App() {
  const initialLists = JSON.parse(window.localStorage.getItem('lists')) || {};
  const [lists, setLists] = useState(initialLists);

  useEffect(() => {
    window.localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const defaultListItem = {
    title: 'My to do list',
    tags: {},
    items: {},
  };

  const handleNewList = () => {
    const newUUID = uuid();
    setLists({ ...lists, [newUUID]: defaultListItem });
  };

  return (
      <Layout>
        <AppContainer>
          <ButtonContainer>
            <CreateNewListButton onClick={handleNewList}>
              <CreateNewListIcon icon={faPlus} />
              Create A New List
            </CreateNewListButton>
          </ButtonContainer>
          <ListsContainer>
            {Object.keys(lists).map((key) => <List
              key={key}
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
