import React from 'react'

const SearchBox = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} value={props.values}></input>
        <button type="submit">Search</button>
    </form>

)

export default SearchBox