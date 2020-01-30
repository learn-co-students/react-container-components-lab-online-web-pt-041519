import React from 'react'

class SearchForm extends React.Component {
  state = { query: ''}

  // Push query to fetchReviews() prop
  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchReviews(this.state.query)
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SearchForm