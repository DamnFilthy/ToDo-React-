import './post-list-item.css'
import React from 'react'


export default class PostListItem extends React.Component {
    render(){
        
        const {label, onDelete, onToggleImportant, onToggleLiked, onToggleDone, important, like, done, date} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important){
            classNames += ' important';
        }
        if (like){
            classNames += ' like';
        }
        if (done){
            classNames += ' done';
        }

        return (
                <div
                className={classNames}>
                 <span onClick={onToggleLiked}
                 className="app-list-item-label">
                    {label}
                    {date}
                    </span>
                    <div className="d-flex justify-content-center  align-items-center">

                    <button 
                    onClick={onToggleDone}
                    type="button" 
                    className="btn-done btn-sm">
                        <i className="fas fa-check"></i>
                    </button>
                        
                    <button 
                    onClick={onToggleImportant}
                    type="button" 
                    className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>

                    <button 
                    type="button" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash-alt"></i>
                    </button>
                    
                    <i className="fas fa-heart"></i>
                    </div>
                </div>
        );
    }
}
