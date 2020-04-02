import React from 'react';
import PropTypes from 'prop-types'

function Toolbar(props) { 
    const {filters, selected, onSelectFilter } = props
    return (
      <div>
        {filters.map((item, index) => {
    
          return (
            <button  onClick={event => onSelectFilter(item)} key={index}> {item} </button>   
          )
        })}
      </div>
    )
  }

  export default Toolbar

  Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
    selected: PropTypes.string
  }

