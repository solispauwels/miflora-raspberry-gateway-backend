import React from 'react'
import './app.scss'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { entries: [], picture: null }
  }

  componentDidMount () {
    this.getEntries().then(entries => this.setState({ entries }, () => this.setPicture(0)))
  }

  setPicture (current) {
    this.setState({ picture: this.state.entries[current].date })
  }

  getEntries () {
    return window.fetch('/api/bonsai').then(response => response.json())
  }

  render () {
    return (
      <>
        {this.state.entries.length > 0 && (
          <div className='grid'>
            {this.state.picture && <img src={`/pictures/${this.state.picture}.jpg`} alt={this.state.picture} />}
            {Object.keys(this.state.entries[0]).map((name, index) => (<div className='column title' key={index}>{name}</div>))}
            {this.state.entries.map((item, current) => Object.keys(item).map((key, index) => (
              <div className='column' key={index} onClick={() => this.setPicture(current)}>
                {key === 'temperature' ? item[key] / 10 : key === 'date' ? new Date(item[key]).toLocaleString() : item[key]}
              </div>
            )))}
          </div>
        )}
      </>
    )
  }
}
