import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import {filters, projects} from './projectListData';
import PropTypes from 'prop-types'

class Portfolio extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        filters: filters,
        selected: filters[0],
        projects: projects
      }
    }
    handlerToggle = (filter) => {
     let filteredProjects = (filter === filters[0]) ? projects : projects.filter(item => item.category === filter)
      this.setState({
        selected: filter,
        projects: filteredProjects,
      })
    }  
    render() {
      return(
        <div>
          <Toolbar
            filters={this.state.filters}
            selected={this.state.selected}
            onSelectFilter={(selected) => this.handlerToggle(selected)} />
          <ProjectList projects={this.state.projects} />
        </div>
      )
    }
  }

  export default Portfolio

  Portfolio.propTypes = {
    projects: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
  }