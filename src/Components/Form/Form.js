import React, {Component} from 'react'; 
import './Form.css'; 
import Nav from '../Nav/Nav';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props); 

        this.state = {
            title :'',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy67qKEMJNh_JsKfsEY3BTVbfSzvXi9F0QzwgKxC9fxTzYBEIb',
            content: ''
        }
    }

    makePost = () => {
        debugger 
        axios.post(`api/posts/create`, { post_title: this.state.title, post_image: this.state.imageURL, post_content: this.state.content })
        .then( results => {
        })
        this.props.history.push('/Dashboard')
    }

    handleInputChange= (e) => {
        const target = e.target; 
        const value = target.value; 
        const name = target.name; 

        this.setState({
          [name] :value
        }); 
        console.log(this.state, 'state')

      }

    render(){
         
        return(
            <div className='form'>  
                {this.props.location.pathname !== '/' ? <Nav tologin={()=> {this.props.history.push('/')}}/> : ' '}
                <div className='newFormBox'>
                    <h2 className='newPostTitle'>New Post</h2>
                    <div className='inputFields'>
                        <div className='cont'>
                            <p className='title'>Title:</p>
                            <input type='text' name='title' value={this.state.title} onChange={this.handleInputChange}className='inputNewForm'/>
                        </div>
                        <div className='cont'>
                            <p className='title'>Image URL:</p>
                            <input type='text' name='imageURL' value={this.state.imageURL} onChange={this.handleInputChange} className='inputNewForm'/>
                        </div>
                        <div className='cont'>
                            <p className='title'>Content:</p>
                            <textarea name='content' value={this.state.content} onChange={this.handleInputChange} className='contentContainer' rows="10"/>
                            <img className='formImage' src={this.state.imageURL} alt=""/>
                        </div>
                    </div>
                    <div className='buttonPlacement'>
                        <button className='postButton' onClick={this.makePost}>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form; 



