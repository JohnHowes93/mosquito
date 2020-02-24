import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { v1 as uuid } from 'uuid';

import {
  TextInput,
  Layout,
  TitleContainer,
  ItemsContainer,
  AddButton,
  CreateNewListItemIcon,
  TagContainer,
  DeleteButton,
} from './styles';
import ListItem from '../ListItem';
import Tag from '../Tag';

const List = ({
  title = '', items = {}, tags = {}, id, setLists, lists,
}) => {
  const defaultListItem = {
    text: '', completed: false,
  };

  const defaultTag = {
    text: '',
  };

  const addNewListItem = () => {
    const newUUID = uuid();
    const newItemsList = { ...lists[id].items, [newUUID]: defaultListItem };
    const newList = { ...lists[id], items: newItemsList };
    setLists({ ...lists, [id]: newList });
  };

  const addNewTag = () => {
    const newUUID = uuid();
    const newTagsList = { ...lists[id].tags, [newUUID]: defaultTag };
    const newList = { ...lists[id], tags: newTagsList };
    setLists({ ...lists, [id]: newList });
  };

  const handleDeleteList = () => {
    const newLists = { ...lists };
    delete newLists[id];
    setLists(newLists);
  };

  const handleTitleChange = (e) => {
    const editedList = { ...lists[id], title: e.target.value };
    const newLists = { ...lists, [id]: editedList };
    setLists(newLists);
  };

  return (
    <Layout>
        <TitleContainer>
            <TextInput value={title} onChange={handleTitleChange}></TextInput>
            <DeleteButton onClick={handleDeleteList}>
                <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
        </TitleContainer>
        <ItemsContainer>
            {Object.keys(items).map((key) => <ListItem key={key} setLists={setLists} lists={lists} id={id} text={items[key].text} itemID={key} completed={items[key].completed} />)}
            <AddButton onClick={addNewListItem}>
                <CreateNewListItemIcon icon={faPlus} />
                New Item
            </AddButton>
        </ItemsContainer>
        <TagContainer>
            {Object.keys(tags).map((tag) => <Tag key={tag} text={tags[tag].text} setLists={setLists} lists={lists} id={id} tagID={tag} />)}
            <AddButton onClick={addNewTag}>
                <CreateNewListItemIcon icon={faPlus} />
                New Tag
            </AddButton>
        </TagContainer>
    </Layout>
  );
};

export default List;
