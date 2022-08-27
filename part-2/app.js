
const App = () => {
    
    return (
        <div>
            <Tweet 
            username="tk0505" 
            name="Tim" 
            date={ new Date().toDateString() } 
            message="Does this work?" 
            />
            <Tweet 
            username="MEEKS" 
            name="Mekha" 
            date={ new Date().toDateString() } 
            message="Maybe it does, maybe it doesn't" 
            />
            <Tweet 
            username="JJJHS" 
            name="John Jacob" 
            date={ new Date().toDateString() } 
            message="I guess it DOES!" 
            />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));