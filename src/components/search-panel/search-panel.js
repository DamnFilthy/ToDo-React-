import './search-panel.css';
import React from 'react'

export default class SearchPanel extends React.Component {
  
  constructor(props){

    super(props);
    this.state = {
      term: ''
    }

    this.onUpdateSearch = (e) => {
      const term = e.target.value;
      this.setState({term});
      this.props.onUpdateSearch(term);
    }

  }

    render(){
      return(
        <input 
        onChange = {this.onUpdateSearch}
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        />
      );
    }
  }

