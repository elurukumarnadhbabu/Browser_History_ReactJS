import {Component} from 'react'

import BrowserTodo from '../BrowserTodo'

import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    initialHistoryList: [],
  }

  deleteTransaction = id => {
    const {initialHistoryList} = this.state
    const updatedTransactionList = initialHistoryList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    console.log(initialHistoryList)
    this.setState({
      initialHistoryList: updatedTransactionList,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachDestination =>
      eachDestination.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="navbar">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
            <div className="search-container">
              <div className="search-icon-color">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search icon"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                className="search-input"
                placeholder="Search history"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
        </div>
        <div className="destinations-search-container">
          <ul className="destinations-list">
            {searchResults.map(eachDestination => (
              <BrowserTodo
                key={eachDestination.id}
                destinationDetails={eachDestination}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
