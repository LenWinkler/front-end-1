import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import { Link } from 'react-router-dom';
import Header from '../Misc/Header';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
`
const NameInput = styled.input`
    height: 3rem;
    width: 18rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    border: 1px solid #4e4e4e;
    color: #696969;
`
const OtherInput = styled.input`
    height: 3rem;
    width: 18rem;
    margin: 1rem 0;
    font-size: 1.4rem;
    border: 1px solid #4e4e4e;
    color: #696969;
`

const TopLabel = styled.label`
    margin-top: 1rem;
    font-size: 1.5rem;
`

const Label = styled.label`
    font-size: 1.5rem;
`

const Button = styled.button`
    width: 14rem;
    height: 3rem;
    margin: 3rem 0;
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

const ReturnButton = styled.button`
    width: 14rem;
    height: 3rem;
    margin-bottom: 3rem;
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

const SpaceDiv = styled.div`
    height: 3rem;
`

const UpdateClient = props => {
    const [client, setClient] = useState({
        id: 0,
        name: "",
        village: "",
        loanAmount: 0,
        paidAmount: 0,
        dueAmount: 0,
        loanInitialDate: "",
        loanDueDate: "",
        achievedBag: 0,
        goalBag: 0
    });

    const handleChanges = e => {
        setClient({ ...client, [e.target.name]: e.target.value });
    }
    
    useEffect(() => {
        const id = props.match.params.id;
        axiosWithAuth()
        .get(`/api/client/${id}`)
        .then(res => {
            setClient(res.data)
        })
    }, [])

    const submitChanges = e => {
        e.preventDefault();
        props.updateData(client);
        alert(`Updated information for ${client.name}`);
        props.history.push('/client-list')
    }
    
    if (props.isUpdating) {
        return (
            <p>Updating Client Information...</p>
        )
    } else {
    return(
        <>
        <Header title={`Update Client Info`} />
        <StyledForm onSubmit={submitChanges}>
            <TopLabel>Name:</TopLabel>
            <NameInput type="text" name="name" value={client.name} onChange={handleChanges} />
            <Label>Village:</Label>
            <OtherInput type="text" name="village" value={client.village} onChange={handleChanges} />
            <Label>Loan Date:</Label>
            <OtherInput type="text" name ="loanInitialDate" value={client.loanInitialDate} onChange={handleChanges} />
            <Label>Due Date:</Label>
            <OtherInput type="text" name="loanDueDate" value={client.loanDueDate} onChange={handleChanges} />
            <Label>Loan Amount:</Label>
            <OtherInput type="number" name="loanAmount" value={client.loanAmount} onChange={handleChanges} />
            <Label>Amount Paid:</Label>
            <OtherInput type="number" name="paidAmount" value={client.paidAmount} onChange={handleChanges} />
            <Label>Amount Still Due:</Label>
            <OtherInput type="number" name="dueAmount" value={client.dueAmount} onChange={handleChanges} />
            <Label>Bags To Sell:</Label>
            <OtherInput type="number" name="achievedBag" value={client.achievedBag} onChange={handleChanges} />
            <Label>Bags To Keep:</Label>
            <OtherInput type="number" name="goalBag" value={client.goalBag} onChange={handleChanges} />
            <Button>Submit Information</Button>
            <ReturnButton onClick={() => props.history.push('/client-list')}>Return To Client List</ReturnButton>
        </StyledForm>
        <Link to={{
            pathname: `/delete-client/${client.id}`,
            state: {
                client: client
            }
        }}>CLICK HERE TO DELETE THIS CLIENT</Link>
        <SpaceDiv />
        </>
    )
  }
}

const mapStateToProps = state => {
    return {
        isUpdating: state.isUpdating
    }
}

export default connect(mapStateToProps , { updateData })(UpdateClient);