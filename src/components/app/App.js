import './app.css';
import React from 'react'
import AppHeader from  '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'
// import WhoAmI from '../who-am-i/who-am-i';

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      data :[
        {id:'1', label: "Going to learn React", important: false, like: false},
        {id:'2', label: "I need a dollar", important: false, like: false},
        {id:'3', label: "That is so good", important: false, like: false}
      ],
      term: '',
      filter: 'all'
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

  }

  render(){
    const liked = this.state.data.filter(item => item.like === true).length;
    const allPosts = this.state.data.length;
    const {data, term, filter} = this.state;
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return(
      <div className="app">
         < AppHeader 
         liked={liked}
         allPosts={allPosts}
         />

           <div className="search-panel d-flex">
               < SearchPanel 
               onUpdateSearch = {this.onUpdateSearch}
               />
               < PostStatusFilter 
               filter={filter}
               onFIlterSelect={this.onFilterSelect}
               />
           </div>

         < PostList 
         posts = {visiblePosts}
         onDelete = {this.deleteItem}
         onToggleImportant = {this.onToggleImportant}
         onToggleLiked = {this.onToggleLiked}
         />

         < PostAddForm 
            onAdd = {this.addItem}
         />  

      </div>
     
     );
  }
}


