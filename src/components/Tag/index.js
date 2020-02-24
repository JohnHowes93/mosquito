import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTrash } from '@fortawesome/free-solid-svg-icons';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1rem 1fr 2rem;
    align-items: center;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    font-size: 0.8rem;
    border: 1px solid lightgray;
    border-radius: 12px;
    margin: 0.25rem;
`;

const DeleteButton = styled.button`
    border: 0;
    color: whitesmoke;
    background-color: transparent;
    border-radius: 5px;
    margin-left: 0.5rem;
    &:hover{
        background-color: lightgray;
        border: red;
        color:red;
    }
`;

export const TextInput = styled.input`
    font-family: inherit;
    font-size: 0.75rem;
    background-color: transparent;
    border: 1px solid transparent;
    padding:0.25rem;
    &:hover{
        border: 1px solid lightgray;
    }
    margin: 0.25rem;
`;


const Tag = ({
  text, tagID, id, lists, setLists,
}) => {
  const handleDeleteItem = () => {
    const newListItems = { ...lists[id].tags };
    delete newListItems[tagID];
    const newList = { ...lists[id], tags: newListItems };
    setLists({ ...lists, [id]: newList });
  };

  const handleChangeText = (e) => {
    const editedTag = { ...lists[id].tags[tagID], text: e.target.value };
    const newTags = { ...lists[id].tags, [tagID]: editedTag };
    const newList = { ...lists[id], tags: newTags };
    setLists({ ...lists, [id]: newList });
  };

  return (
    <Layout>
        <div><FontAwesomeIcon icon={faTag} /></div>
        <TextInput value={text} size={text.length} onChange={handleChangeText}></TextInput>
        <div>
            <DeleteButton onClick={handleDeleteItem}>
                <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
        </div>
    </Layout>
  );
};

export default Tag;
