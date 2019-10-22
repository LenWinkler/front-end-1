import React, { useState } from "react";

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
            loanDueDate: client.loanDueDate
        //Make an API post request here to send newClient object.  If response is successful, then update state, else error msg.
        };
        setClient({ name: "", village: "", loanAmount: "", loanInitialDate: "", loanDueDate: "" });
    };

    return (
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
            <label htmlFor="loanAmount">Loan Amount:</label>
                <input
                    id="loanAmount"
                    name="loanAmount"
                    onChange={handleChanges}
                    value={client.loanAmount}
                />
                {client.loanAmount.length === 0 ? <p>Enter loan amount</p> : ''}
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
            <button type="submit">Add Client</button>
        </form>
    );
};

export default AddClient;