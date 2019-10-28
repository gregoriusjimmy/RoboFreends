import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        console.log(users)
        this.setState({ robots: users })
      })
    console.log('mount')
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
      })
      return (
        <div className='tc'>
          <h1 className='f1'>Robo Freends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
    }
  }
}
export default App
