import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <form onSubmit={props.handleSubmit}>
          <input className="prompt"/>
          <i className="search icon" />
        </form>
      </div>
    </div>
  )
}

export default Search
