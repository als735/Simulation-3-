import React, {Component} from 'react'; 
import './Form.css'; 
import Nav from '../Nav/Nav';

class Form extends Component {
    render(){
         
        return(
            <div className='form'>
                Form  
                {this.props.location.pathname !== '/' ? <Nav/> : ' '}

            </div>
        )
    }
}

export default Form; 