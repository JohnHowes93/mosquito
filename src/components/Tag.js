import React from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTrash } from '@fortawesome/free-solid-svg-icons'

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1.5rem 1fr 1.5rem;
    align-content: center;
    padding: 0.5rem;
    font-size: 0.8rem;
    border: 1px solid whitesmoke;
    margin-left: 0.5rem;
`

const DeleteButton = styled.button`
    border: 0;
    color: whitesmoke;
    background-color: transparent;
    border-radius: 5px;
    margin-left: 0.5rem;
    &:hover{
        color:red;
    }
`

export default ({text = ''}) => {
    return (
    <Layout>
        <div><FontAwesomeIcon icon={faTag} /></div>
        <div>{text}</div>
        <div>
            <DeleteButton>
                <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
        </div>
    </Layout>
    )
}