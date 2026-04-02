const Person = ({person, handleDelete}) => {
    const {name, number, id} = person
    return (
        <li className='person-item'>
            {name} {number} 
            <button className='person-button' onClick={() => handleDelete(id, name)}>
                delete
            </button>
        </li>
    )
}

export default Person