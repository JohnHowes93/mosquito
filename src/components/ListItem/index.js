import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import {
  Layout, DeleteButton, TextContainer, TextInput, MarkAsCompletedContainer,
} from './styles';

const ListItem = ({
  text = '', completed = false, lists, setLists, id, itemID,
}) => {
  const handleChangeText = (e) => {
    const editedListItem = { ...lists[id].items[itemID], text: e.target.value };
    const newListItems = { ...lists[id].items, [itemID]: editedListItem };
    const newList = { ...lists[id], items: newListItems };
    setLists({ ...lists, [id]: newList });
  };

  const handleDeleteItem = () => {
    const newListItems = { ...lists[id].items };
    delete newListItems[itemID];
    const newList = { ...lists[id], items: newListItems };
    setLists({ ...lists, [id]: newList });
  };

  const handleMarkAsCompleted = () => {
    const editedListItem = { ...lists[id].items[itemID], completed: !completed };
    const newListItems = { ...lists[id].items, [itemID]: editedListItem };
    const newList = { ...lists[id], items: newListItems };
    setLists({ ...lists, [id]: newList });
  };

  return (
    <Layout>
        <MarkAsCompletedContainer>
            <input type='checkbox' id='completed' onClick={handleMarkAsCompleted} checked={completed} />
        </MarkAsCompletedContainer>
        <TextContainer>
            <TextInput value={text} onChange={handleChangeText} completed={completed}></TextInput>
        </TextContainer>
        <div>
            <DeleteButton onClick={handleDeleteItem}>
                <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
        </div>
    </Layout>
  );
};

export default ListItem;
