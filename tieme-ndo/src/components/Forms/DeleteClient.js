import React from 'react';
import { deleteData } from '../../actions/index';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../Misc/Header';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`

const YouSure = styled.p`
    font-size: 2.3rem;
`
const Span = styled.span`
    font-weight: bold;
    font-style: italic;
`

const YesButton = styled.button`
    width: 14rem;
    height: 3rem;
    margin: 2rem 0;
    border-radius: 5px;
    background: red;
    color: white;
    font-size: 1rem;
    font-weight: bold;

    :hover {
        background: white;
        color: red;
        border: 1px solid red;
    }
`
const NoButton = styled.button`
    width: 14rem;
    height: 3rem;
    margin: 1rem 0;
    border-radius: 5px;
    background: #73A85A;
    color: white;
    font-size: 1rem;
    font-weight: bold;

    :hover {
        background: white;
        color: #73A85A;
        border: 1px solid #73A85A;
    }
`

const DeleteClient = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.deleteData(props.location.state.client)
        alert(`${props.location.state.client.name} was deleted`);
        props.history.push('/client-list')
    }

    const goBack = e => {
        e.preventDefault();
        props.history.push(`/update-client/${props.location.state.client.id}`)
    }

    if (props.isDeleting) {
        return (
            <p>Deleting Client...</p>
        )
    } else {

    return (
        <>
        <Header title={`Delete Client`} />
        <Div>
            <YouSure>Are you sure you want to <Span>permanently</Span> delete this client?</YouSure>
            <YesButton onClick={handleSubmit}>{`Yes. Delete ${props.location.state.client.name}`}</YesButton>
            <NoButton onClick={goBack}>No. Go back to the update page.</NoButton>
        </Div>
        </>
    )
  }
}

const mapStateToProps = state => {
    return {
        isDeleting: state.isDeleting
    }
}

export default connect(mapStateToProps, { deleteData })(DeleteClient);