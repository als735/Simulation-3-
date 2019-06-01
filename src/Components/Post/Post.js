import React, {Component} from 'react'; 
import './Post.css'; 
import Nav from '../Nav/Nav';


class Post extends Component {
    render(){
         
        return(
            <div className='post'>
                Post  
                {this.props.location.pathname !== '/' ? <Nav/> : ' '}
            </div>
        ) 
    }
}

export default Post; 