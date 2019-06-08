import React, {Component} from 'react'; 
import './Post.css'; 
import axios from 'axios';
// import Nav from '../Nav/Nav';


class Post extends Component {
    constructor(props){
        super(props); 

        this.state = {
            post_title: '',
            post_image: '', 
            post_content: '', 
            email : '', 
            profile_picture: ''
        }
    }

    componentDidMount() {
        axios.get(`/posts/${this.props.post_id}`)
        .then( results => {
            const {title, image, content, email, profile_picture} = results.data[0]
            this.setState({
                post_title: title, 
                post_image: image,
                post_content: content, 
                email: email, 
                profile_picture: profile_picture
            })
        })
    }

    render(){
        // const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>

        return(
            <div className='postBox'>
                <div className='titleImageBox'>
                    <h1 className='postTitle'>{this.props.post_title}</h1>
                    <img className="postPic" src={this.props.post_image} alt=""/>
                </div>
                <div>
                <p className='postContent'>{this.props.post_content}</p>
                </div>
                <div className='userInfo'>
                    <p className='authUser'> By: {this.props.email}</p>
                    <img className="authieImage" src={this.props.profile_picture} alt="" />
                </div>
            </div>
        ) 
    }
}

// return <Post key={i} index={i} postId={e.postId} title={e.title} email={e.email} profile_picture={e.profile_picture}/> // 


export default Post; 