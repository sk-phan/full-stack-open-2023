const Error = ({ message, error }) => {

    const errorClass = error ? 'error' : 'success'
    const className = `error-container ${errorClass}`

    return (
        <div className = {className}>
            <p> {message} </p>
        </div>
    )
}

export default Error