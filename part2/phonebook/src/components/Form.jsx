const Form = ({values, handlers}) => {
    return (
        <>
            <h2>Add new</h2>
            <form onSubmit={handlers.handleSubmit}>
                <div>
                name: <input type="text" value={values.newName} onChange={handlers.handleNameInput} />
                </div>
                <div>
                number: <input type="text" value={values.newNumber} onChange={handlers.handleNumberInput} />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Form