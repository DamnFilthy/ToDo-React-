import './sort-btns.css';
import React from 'react'


export default class SortBtns extends React.Component{
    constructor(props){
      super(props);
      this.buttons = [
        {name: 'all', label: 'Все записи'},
        {name: 'today', label: 'Сегодняшние'},
        {name: 'week', label: 'За неделю'},
        {name: 'month', label: 'За месяц'},
        {name: 'older', label: 'Старые'}
      ]
    }
  
      render(){
        const buttons = this.buttons.map(({name, label}) => {
          const active = this.props.sort === name;
          const classActive = active ? 'btn-success' : 'btn-outline-secondary'
          return (
            <button
              onClick={ () => this.props.onSortSelect(name) }
              key={name} 
              type="button" 
              className={`btn ${classActive}`}>{label}
            </button>
          )
        })
        return(
          <div className="btn-group">
            {buttons}
          </div>
        );
      }
    }