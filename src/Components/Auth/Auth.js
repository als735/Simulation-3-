import React, {Component} from 'react'; 
import './Auth.css'; 
import axios from 'axios'; 
import Nav from '../Nav/Nav';


class Auth extends Component {
    constructor(props){
        super(props); 
        
        this.state = {
            username :'',
            password : '',
            loggedInUser: {}
        }
    }

    async signup() {
        let {username, password} = this.state; 
        let res = await axios.post('/auth/signup', {
           username,
           password
          }); 
        this.setState({loggedInUser: res.data, username: '', password: ''}); 
      } // It makes the post request, sets the returned user on state, and resets the input fields.

      async login() {
        let {username, password} = this.state; 
        let res = await axios.post('/auth/login', {
          username, 
          password
        }); // The body is an object with our username and password from state assigned as properties on the object.
    
        this.setState({loggedInUser: res.data, username: '', password: ''}); 
      } // When the response comes back, we set the returned user on state and reset the username and password fields.

    handleInputChange= (e) => {
        const target = e.target; 
        const value = target.value; 
        const name = target.name; 
      
        this.setState({
          [name] :value
        }); 
      }



    render(){
        console.log(this.state); 
        return(
            <div className='auth'>
                <div>
                    <div>
                        <label htmlFor="">
                        Username: 
                        <input type="text" value={this.state.username} name='username' onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                        Password: 
                        <input type="text" value={this.state.password} name='password' onChange={this.handleInputChange}/>                        </label>
                        </div>
                    </div>
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.signup()}>Register</button>
                {this.props.location.pathname !== '/' ? <Nav/> : ' '}
            </div>
        )
    }
}

export default Auth; 