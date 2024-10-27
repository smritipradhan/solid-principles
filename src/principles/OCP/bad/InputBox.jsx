class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({});
  }

  render() {
    return (
      <div>
        <h1>Enter your name: </h1>
        <input value={this.state.input} onChange={this.handleChange} />
      </div>
    );
  }
}

class FancyInputBox extends InputBox {
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Enter your name: </h1>
        <input value={this.state.input} onChange={this.handleChange} />
      </div>
    );
  }
}
