import React, { Component } from 'react';

/// Mostrar una lista en base a un arreglo

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['Javascript', 'CSS', 'HTLM', 'React']
    }
  }
  render() {
    const Names = (props) => <h1>{props.name}</h1>;
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Las tecnologias del Front</h1>
        <ul style={styles.list}>
          {this.state.list.map((name) =>
            <Names name={name} />
          )}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: '100px'
  },
  list: {
    fontSize: '20px',
    flexGrow: 6
  }
}

export default App;
