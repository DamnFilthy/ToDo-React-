import './post-list.css'
import PostListItem from '../../components/post-list-item/post-list-item'
// import { ListGroup } from 'reactstrap';



function PostList({posts, onDelete, onToggleImportant, onToggleLiked, onToggleDone}) {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'> 
                <PostListItem  
                    {...itemProps} 
                    onDelete = { () => onDelete(id)}
                    onToggleImportant = { () => onToggleImportant(id)}
                    onToggleLiked = { () => onToggleLiked(id)}
                    onToggleDone = { () => onToggleDone(id)}
                />
            </li>
        );
    });
    return (
        <ul className="app-list">
            {elements}
        </ul>
    );
}

export default PostList;