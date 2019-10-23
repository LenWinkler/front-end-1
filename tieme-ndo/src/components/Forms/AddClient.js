import React, { useState } from "react";
import { connect } from 'react-redux';
import { addData } from '../../actions/index';

const AddClient = props => {
    const [client, setClient] = useState({ name: "", village: "", loanAmount: "", loanInitialDate: "", loanDueDate: "" });
    const [isAdding, setIsAdding] = useState(false);

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
        //Make an API post request here to send newClient object.  If response is successful, then update state, else error msg.
        };
        props.addData(newClient);
        alert(`Successfully added user "${client.name}"`);
        setClient({ name: "", village: "", loanAmount: "", loanInitialDate: "", loanDueDate: "", paidAmount: "", dueAmount: "", goalBag: "", achievedBag: "" });
        props.history.push('/client-list');
    };

    return (
    <>
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChanges}
                    value={client.name}
                />
                {client.name.length === 0 ? <p>Name is required</p> : ''}
            <label htmlFor="village">Village:</label>
                <input
                    id="village"
                    name="village"
                    onChange={handleChanges}
                    value={client.village}
                />
                {client.village.length === 0 ? <p>Village is required</p> : ''}
                <label htmlFor="loanInitialDate">Loan Start Date:</label>
                <input
                    id="loanInitialDate"
                    name="loanInitialDate"
                    onChange={handleChanges}
                    value={client.loanInitialDate}
                />
                {client.loanInitialDate.length === 0 ? <p>Enter date of loan</p> : ''}
            <label htmlFor="loanDueDate">Loan Due Date:</label>
                <input
                    id="loanDueDate"
                    name="loanDueDate"
                    onChange={handleChanges}
                    value={client.loanDueDate}
                />
                {client.loanDueDate.length === 0 ? <p>Enter due date of loan</p> : ''}
            <label htmlFor="loanAmount">Loan Amount:</label>
                <input
                    id="loanAmount"
                    name="loanAmount"
                    onChange={handleChanges}
                    value={client.loanAmount}
                />
                {client.loanAmount.length === 0 ? <p>Enter loan amount</p> : ''}
            
            
            
            <button type="submit">Add Client</button>
        </form>
        
        <button onClick={() => props.history.push('/client-list')}>Return to Client List</button>
    </>
    );
};

const mapStateToProps = state => {
    return {
        isAdding: state.isAdding
    }
}

export default connect(mapStateToProps, { addData })(AddClient);