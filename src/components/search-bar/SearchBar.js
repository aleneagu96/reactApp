import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
const SearchBar = ({ filterText, onUserInput, onSubmit }) => {
  const handleEnter = (event, callback) => {
    if (event.key === 'Enter') {
      callback(filterText)
    }
    
    // check for enter key
    // invoke the callback if true
}
  return (
        <input
          onChange={(event) => {
            // call "onUserInput" with the new value
            // the typed value can be retrieved like this "event.target.value"
            onUserInput(event.target.value)
            // console.log(event)
          }}
          // set filterText value to input value
          value={filterText}
          onKeyPress={event => handleEnter(event, onSubmit)}

        />);

        }
SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    onUserInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired    

}
export default SearchBar;