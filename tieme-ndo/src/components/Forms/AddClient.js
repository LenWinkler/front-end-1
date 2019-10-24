import React, { useState } from "react";
import { connect } from 'react-redux';
import { addData } from '../../actions/index';
import styled from 'styled-components';
import Header from '../Misc/Header';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
`

const Button = styled.button`
    width: 12rem;
    height: 3rem;
    margin: 1.5rem 0;
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

const NameInput = styled.input`
    height: 3rem;
    width: 18rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    border: 1px solid #4e4e4e;
`

const OtherInput = styled.input`
    height: 3rem;
    width: 18rem;
    margin: 1rem 0;
    font-size: 1.4rem;
    border: 1px solid #4e4e4e;
`

const AddClient = props => {
    const [client, setClient] = useState({ name: "", village: "", loanAmount: "", loanInitialDate: "", loanDueDate: "" });

    const handleChanges = event => {
        setClient({ ...client, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newClient = {
            id: Date.now(),
            name: client.name,
            village: client.village,
            loanAmount: client.loanAmount,
            loanInitialDate: client.loanInitialDate,
            loanDueDate: client.loanDueDate,
            paidAmount: 0,
            dueAmount: client.loanAmount,
            goalBag: 0,
            achievedBag: 0
        };
        props.addData(newClient);
        alert(`Successfully added user "${client.name}"`);
        setClient({ name: "", village: "", loanAmount: "", loanInitialDate: "", loanDueDate: "", paidAmount: "", dueAmount: "", goalBag: "", achievedBag: "" });
        props.history.push('/client-list');
    };

    if(props.isAdding) {
        return (
            <p>Adding Client...</p>
        )
    } else {

    return (
    <>
        <Header title={`Add New Client`} />
        <StyledForm onSubmit={submitForm}>

                <NameInput
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChanges}
                    value={client.name}
                />
                <OtherInput
                    id="village"
                    name="village"
                    placeholder="Village"
                    onChange={handleChanges}
                    value={client.village}
                />
                <OtherInput
                    id="loanAmount"
                    name="loanAmount"
                    placeholder="Loan Amount"
                    onChange={handleChanges}
                    value={client.loanAmount}
                />
                <OtherInput
                    id="loanInitialDate"
                    name="loanInitialDate"
                    placeholder="Loan Start Date"
                    onChange={handleChanges}
                    value={client.loanInitialDate}
                />
                <OtherInput
                    id="loanDueDate"
                    name="loanDueDate"
                    placeholder="Loan Due Date"
                    onChange={handleChanges}
                    value={client.loanDueDate}
                />
            
            <Button type="submit">Add Client</Button>
        </StyledForm>
        
        <Button onClick={() => props.history.push('/client-list')}>Return to Client List</Button>
    </>
    );
  }
};

const mapStateToProps = state => {
    return {
        isAdding: state.isAdding
    }
}

export default connect(mapStateToProps, { addData })(AddClient);