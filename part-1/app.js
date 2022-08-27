const App = () => {
    return (
    <div>
    <FirstComponent />
    <NamedComponent name="Tim" />
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));