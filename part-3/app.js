const App = () => {

    return (
        <div>
        <Person age={17} 
                name="Timothykelley"
                hobbies={["skateboarding", "surfing", "snowboarding"]}
        />
        <Person age={54} 
                name="Jon"
                hobbies={["reading", "writing", "ruling"]} 
        />
        <Person age={16} 
                name="Jacobis"
                hobbies={["photos", "videos", "graffiti"]} 
        />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));