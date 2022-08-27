const Tweet = (props) => {
    return (
        <div>
            <h2>Username: {props.username}</h2>
            <ul>
                <li>Name: {props.name}</li>
                <li>Date: {props.date}</li>
                <li>Message: {props.message}</li>
            </ul>
        </div>
    )
}