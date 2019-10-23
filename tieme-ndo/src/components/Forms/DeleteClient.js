import React, { useState } from 'react';
import { deleteData } from '../../actions/index';
import { connect } from 'react-redux';



const DeleteClient = props => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        props.deleteData(props.location.state.client)
        alert(`Updated information for ${props.location.state.client.name}`);
        props.history.push('/client-list')
    }

    const goBack = e => {
        e.preventDefault();
        props.history.push(`/update-client/${props.location.state.client.id}`)
    }

    return (
        <div>
            <p>Are you sure you want to permanently delete this client?</p>
            <button onClick={handleSubmit}>{`Yes. Delete ${props.location.state.client.name}`}</button>
            <button onClick={goBack}>No. Go back to the update page.</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDeleting: state.isDeleting
    }
}

export default connect(mapStateToProps, { deleteData })(DeleteClient);