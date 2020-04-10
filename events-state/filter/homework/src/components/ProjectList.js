import React from 'react';
import PropTypes from 'prop-types'

function ProjectList(props) { 
    const {projects} = props
    return (
           projects.map((item, index) => <img key={index} alt={item.category} src={item.img}/> ))
  }

  export default ProjectList

  ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
  }