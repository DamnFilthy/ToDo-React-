import './app.css';
import React from 'react'
import AppHeader from  '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'
import SortBtns from '../sort-btns/sort-btns';

export default class App extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      data :[
        {id:'1', label: "Going to learn React ", important: false, like: false, done: false, date: '2021.05.24'},
        {id:'2f', label: "I need a dollar ", important: false, like: false, done: false, date: '2021.04.25'},
        {id:'2', label: "Something ", important: false, like: false, done: false, date: '2021.05.10'},
        {id:'3', label: "That is so good ", important: false, like: false, done: false, date: new Date().toJSON().slice(0,10).replace(/-/g,'.')}
      ],
      term: '',
      filter: 'all',
      sort: 'all',
    }
    this.maxId = 4;

    this.deleteItem = (id) => {
      this.setState( ({data}) => {
        const index = data.findIndex(elem => elem.id === id);

        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        const newArr = [...before, ...after];

        return {data: newArr} 

      });
    }

    this.addItem = (body) => {
      const newItem = {
        label: body,
        important: false,
        date: new Date().toJSON().slice(0,10).replace(/-/g,'.'),
        id: this.maxId++
      }
      this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {data: newArr}
      });
    }

    this.onToggleImportant = (id) =>{ 
      this.setState( ({data}) => {
        const index = data.findIndex( elem => elem.id === id);
        const old = data[index];
        const newItem = {...old, important: !old.important}

        const newArr = [...data.slice(0, index), newItem,  ...data.slice(index + 1)]
        return {data: newArr}
      })
    }

    this.onToggleLiked = (id) =>{
      this.setState( ({data}) => {
          const index = data.findIndex( elem => elem.id === id);
          const old = data[index];
          const newItem = {...old, like: !old.like}

          const newArr = [...data.slice(0, index), newItem,  ...data.slice(index + 1)]
          return {data: newArr}
      })
    }

    this.onToggleDone = (id) =>{
      this.setState( ({data}) => {
          const index = data.findIndex( elem => elem.id === id);
          const old = data[index];
          const newItem = {...old, done: !old.done}

          const newArr = [...data.slice(0, index), newItem,  ...data.slice(index + 1)]
          return {data: newArr}
      })
    }

    this.searchPost = (items, term) =>{
      if (term.length === 0){
        return items
      }

      return items.filter((item)=>{
        return item.label.indexOf(term) > -1
      })
    }

    this.filterPost = (items, filter) => {
      if (filter === 'like' ) {
        return items.filter(item => item.like)
      } 
      if (filter === 'important' ) {
        return items.filter(item => item.important)
      } 
      if (filter === 'done' ) {
        return items.filter(item => item.done)
      } else {
        return items
      }
    }

    this.sortPost = (items, sort) => {
      if (sort === 'today' ) {
        return items.filter(item => item.date === new Date().toJSON().slice(0,10).replace(/-/g,'.'))
      }
      if (sort === 'week' ) {
        return items.filter(item => new Date(item.date) < new Date() - (24 * 60 * 60 * 1000) && new Date(item.date) > new Date() - (168 * 60 * 60 * 1000))
      } 
      if (sort === 'month' ) {
        return items.filter(item =>new Date(item.date) < new Date() - (24 * 60 * 60 * 1000) && new Date(item.date) > new Date() - (720 * 60 * 60 * 1000))
      } 
      if (sort === 'older' ) {
        return items.filter(item =>new Date(item.date) < new Date() - (720 * 60 * 60 * 1000))
      } else {
        return items
      }
    }

    this.onUpdateSearch = (term) => {
      this.setState({term})
    }

    this.onFilterSelect = (filter) => {
      this.setState({filter})
    }

    this.onSortSelect = (sort) => {
      this.setState({sort})
    }

  }

  render(){
    const liked = this.state.data.filter(item => item.like === true).length;
    const important = this.state.data.filter(item => item.important === true).length;
    const done = this.state.data.filter(item => item.done === true).length;
    const allPosts = this.state.data.length;


    const {data, term, filter, sort, date} = this.state;
    const visiblePosts = this.sortPost(this.filterPost(this.searchPost(data, term), filter), sort);

    return(
      <div className="app">
         < AppHeader 
         liked={liked}
         allPosts={allPosts}
         done={done}
         important={important}
         />

           <div className="search-panel d-flex">
               < SearchPanel 
               onUpdateSearch = {this.onUpdateSearch}
               />
               < PostStatusFilter 
               filter={filter}
               onFilterSelect={this.onFilterSelect}
               />
           </div>

           <div className="d-flex justify-content-center">
           < SortBtns
           sort={sort}
           onSortSelect={this.onSortSelect}
            />
           </div>
        
         < PostList
         date = {date}
         posts = {visiblePosts}
         onDelete = {this.deleteItem}
         onToggleImportant = {this.onToggleImportant}
         onToggleLiked = {this.onToggleLiked}
         onToggleDone = {this.onToggleDone}
         />

         < PostAddForm 
            onAdd = {this.addItem}
         />  

      </div>
     
     );
  }
}


