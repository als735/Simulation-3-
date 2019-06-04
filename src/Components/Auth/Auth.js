import React, {Component} from 'react'; 
import './Auth.css'; 
import axios from 'axios'; 
import Nav from '../Nav/Nav';


class Auth extends Component {
    constructor(props){
        super(props); 
        
        this.state = {
            email :'',
            password : '',
            loggedInUser: {}
        }
    }

    signup = async () => {
        debugger 
        let {email, password} = this.state; 
        let res = await axios.post('/auth/signup', { 
           email,
           password
          }); 
        this.setState({loggedInUser: res.data, email: '', password: ''}); 
      } // It makes the post request, sets the returned user on state, and resets the input fields.
      //await is like a promise, it won't fire next code till the response comes back it will wait for the post to finish and then load it into the res object and send it back.

    login = async () => { 
        let {email, password} = this.state; 
        let res = await axios.post('/auth/login', {
          email, 
          password
        }); // The body is an object with our email and password from state assigned as properties on the object.
        
        this.setState({loggedInUser: res.data, email: '', password: ''}); 
      } // When the response comes back, we set the returned user on state and reset the username and password fields.
    
    //   logout() {
    //     axios.get('/auth/logout');
    //     this.setState({ loggedInUser: {} });
    //   } //logout functionality sets the loggedInUser on state back to an empty object 
    

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
                        <input type="text" value={this.state.email} name='email' onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                        Password: 
                        <input type="text" value={this.state.password} name='password' onChange={this.handleInputChange}/>                        </label>
                        </div>
                    </div>
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>Register</button>
                {this.props.location.pathname !== '/' ? <Nav/> : ' '}
            </div>
        )
    }
}

export default Auth; 