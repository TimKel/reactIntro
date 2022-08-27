const Person = (props) => {
    let age;
    if(props.age >= 18){
        age = "Please go vote!"
    }else {
        age = "You must be 18"
    }
    
    let hobbies = props.hobbies.map(hobby => (
        <li>{hobby}</li>
    ))
    
    return (
        <div>
            <p><b>Learn some information about this person</b></p>
            <p><b>Name:</b> {props.name.slice(0,6)}</p>
            <p><b>Age:</b> {props.age}</p>
            <h3>{age}</h3>
            <ul>
                <b><u>Hobbies</u></b>
                {hobbies}
            </ul>
        </div>
    )
}