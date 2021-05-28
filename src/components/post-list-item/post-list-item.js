import './post-list-item.css'
import React from 'react'


export default class PostListItem extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     }

    //     this.onImportant = () => {
    //         this.setState(({important}) => ({
    //             important: !important
    //         }))
    //     }

    //     this.onLike = () => {
    //         this.setState(({like}) => ({
    //             like: !like
    //         }))
    //     }

    // }

    render(){
        
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important){
            classNames += ' important';
        }
        if (like){
            classNames += ' like';
        }

        return (
                <div
                className={classNames}>
                 <span onClick={onToggleLiked}
                 className="app-list-item-label">
                    {label}
                    </span>
                    <div className="d-flex justify-content-center  align-items-center">
                    
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
