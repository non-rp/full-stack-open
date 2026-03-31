const Person = ({person, handleDelete}) => {
    const {name, number, id} = person
    return (
        <div>
            {name} {number} 
            <button onClick={() => handleDelete(id, name)}>
                delete {id}
            </button>
        </div>
    )
}

export default Person