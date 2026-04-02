const Notification = ({message, status}) => {
    if(message === null) return null;

    const classes = `notification ${status}`

    return (
        <h2 className={classes}>
            {message}
        </h2>
    )
}

export default Notification