import React, { useState } from "react";

//This Function should be housed in App.... I think? or wherever the clients data store lives at.


// const addNewClient = client => {
//     const newClient = {
//         id: Date.now(),
//         name: client.name,
//         village: client.village,
//         loanAmount: client.loanAmount,
//         loanInitialDate: client.loanInitialDate,
//         loanDueDate: client.loanDueDate
//     };
//     setClients([...clients, newClient]);
// };

//Beginning of Component
const AddClient = props => {
    const [client, setClient] = useState({ name: "", village: "", loanAmount: "", loanInitialDate: "", loanDueDate: "" });

    const handleChanges = event => {
        setClient({ ...client, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewClient(client);
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
            <label htmlFor="village">Village:</label>
                <input
                    id="village"
                    name="village"
                    onChange={handleChanges}
                    value={client.village}
                />
            <label htmlFor="loanAmount">Loan Amount:</label>
                <input
                    id="loanAmount"
                    name="loanAmount"
                    onChange={handleChanges}
                    value={client.loanAmount}
                />
            <label htmlFor="loanInitialDate">Loan Start Date:</label>
                <input
                    id="loanInitialDate"
                    name="loanInitialDate"
                    onChange={handleChanges}
                    value={client.loanInitialDate}
                />
            <label htmlFor="loanDueDate">Loan Due Date:</label>
                <input
                    id="loanDueDate"
                    name="loanDueDatet"
                    onChange={handleChanges}
                    value={client.loanDueDate}
                />
            <button type="submit">Add Client</button>
        </form>
    );
};

export default AddClient;