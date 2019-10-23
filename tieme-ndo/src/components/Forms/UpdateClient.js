import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import { connect } from 'react-redux';
import { updateData } from '../../actions/index';



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
    

    return(
        <>
        <h2>Update Client Information</h2>
        <form onSubmit={submitChanges}>
            <label>Name:</label>
            <input type="text" name="name" value={client.name} onChange={handleChanges} />
            <label>Village:</label>
            <input type="text" name="village" value={client.village} onChange={handleChanges} />
            <label>Loan Date:</label>
            <input type="text" name ="loanInitialDate" value={client.loanInitialDate} onChange={handleChanges} />
            <label>Due Date:</label>
            <input type="text" name="loanDueDate" value={client.loanDueDate} onChange={handleChanges} />
            <label>Loan Amount:</label>
            <input type="number" name="loanAmount" value={client.loanAmount} onChange={handleChanges} />
            <label>Amount Paid:</label>
            <input type="number" name="paidAmount" value={client.paidAmount} onChange={handleChanges} />
            <label>Amount Still Due:</label>
            <input type="number" name="dueAmount" value={client.dueAmount} onChange={handleChanges} />
            <label>Bags of Maize Harvested:</label>
            <input type="number" name="achievedBag" value={client.achievedBag} onChange={handleChanges} />
            <label>Sales Goal(# of bags):</label>
            <input type="number" name="goalBag" value={client.goalBag} onChange={handleChanges} />
            <button>Submit Information</button>
        </form>
        </>
    )

}

export default connect(null , { updateData })(UpdateClient);