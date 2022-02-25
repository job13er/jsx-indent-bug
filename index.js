import React from 'react'

class App extends React.Component {

  state = {
    name: '',
  }

  componentDidMount() {
    this.fetchName()
      .then(name => {
        this.setState({name})
      })
  }

  fetchName = () => {
    const url = 'https://api.github.com/users/job13er'
    return fetch(url)
      .then(resp => resp.json())
      .then(json => json.name)
  }

  render() {
    const {name} = this.state
    return (
      <h1>Hello, {name}</h1>
    )
  }
}

export default App
