import React, {Component} from 'react'; 
import './Post.css'; 
import Nav from '../Nav/Nav';


class Post extends Component {
    constructor(props){
        super(props); 

        this.state = {
            title: '',
            image: '', 
            words: '', 
            email : '', 
            profile_picture: ''
        }
    }

    render(){
         
        return(
            <div className='post'>
                <div>
                    <h1>Post a Title</h1>
                </div>
                <div>
                    <p>{this.state.email}</p>
                </div>
                Post  
                {this.props.location.pathname !== '/' ? <Nav/> : ' '}
            </div>
        ) 
    }
}

export default Post; 