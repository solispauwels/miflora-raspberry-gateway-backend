import React from 'react'
import config from './config'

import Picture from './picture/picture'
import List from './list/list'

import './app.scss'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { items: [], item: null }
  }

  componentDidMount () {
    this.getEntries()
      .then(items => {
        this.setState({ items })
        return items.find(item => item)
      })
      .then(item => this.selectItem(item))
  }

  selectItem (item) {
    this.setState({ item })
  }

  getEntries () {
    return window.fetch(`${config.api}/bonsai`).then(response => response.json())
  }

  render () {
    return (
      <>
        <Picture item={this.state.item} />
        <List items={this.state.items} onSelect={item => this.selectItem(item)} />
      </>
    )
  }
}
