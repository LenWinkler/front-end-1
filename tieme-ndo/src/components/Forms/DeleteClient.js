import { deleteData } from '../../actions/index';
import { connect } from 'redux';



const DeleteClient = props => {
    console.log('delete props', props)

    const handleSubmit = e => {
        e.preventDefault();
        props.deleteData(props.location.state.client)
    }

    const goBack = e => {
        e.preventDefault();
        props.history.push(`/update-client/${props.location.state.client.id}`)
    }

    return (
        <div>
            <p>Are you sure you want to permanently delete this client?</p>
            <button onClick={handleSubmit}>{`Yes. Delete ${props.location.state.client.id}`}</button>
            <button>No. Go back to the update page.</button>
        </div>
    )
}

export default connect(null, { deleteData })(DeleteClient);