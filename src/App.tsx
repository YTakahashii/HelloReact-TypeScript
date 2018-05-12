import * as React from 'react';
import './App.css';
import Name from './components/Name';
import logo from './logo.svg';

export interface IState {
  name: string;
}

class App extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      name: ""
    }

    this.textOnChange = this.textOnChange.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Hello,<Name name={this.state.name}/>.</h1>
        <input typeof="text" value={this.state.name} onChange={this.textOnChange}/>
      </div>
    );
  }

  private textOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({name: e.target.value})
  }
}

export default App;