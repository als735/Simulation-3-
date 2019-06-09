import React, {Component} from 'react'; 
import './Form.css'; 
import Nav from '../Nav/Nav';

class Form extends Component {
    constructor(props){
        super(props); 

        this.state = {
            title :'',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy67qKEMJNh_JsKfsEY3BTVbfSzvXi9F0QzwgKxC9fxTzYBEIb',
            content: ''
        }

    }
    render(){
         
        return(
            <div className='form'>  
                {this.props.location.pathname !== '/' ? <Nav/> : ' '}
                <div className='newFormBox'>
                    <h2 className='newPostTitle'>New Post</h2>
                    <div className='inputFields'>
                        <div className='cont'>
                            <p className='title'>Title:</p>
                            <input className='inputNewForm' />
                        </div>
                        <div className='cont'>
                            <p className='title'>Image URL:</p>
                            <input className='inputNewForm'/>
                        </div>
                        <div className='cont'>
                            <p className='title'>Content:</p>
                            <textarea className='contentContainer' rows="10"/>
                            <img className='formImage' src={this.state.imageURL} alt=""/>
                        </div>
                    </div>
                    <div className='buttonPlacement'>
                        <button className='postButton'>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form; 



