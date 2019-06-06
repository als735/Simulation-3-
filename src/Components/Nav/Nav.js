import React, {Component} from 'react'; 
import './Nav.css'; 
import {Link} from "react-router-dom";
import { connect } from 'react-redux';



class Nav extends Component {
    render(){
console.log(this.props, 'navie')
        const profPic = {
            yourFace : `url(${this.props.payload.profile_picture})`
        }
         
        return(
            <div className='navBar'> 
                <div className='userInfo'>
                    <div className='profPic' style={{backgroundImage: profPic.yourFace}}></div>
                    <div className='listingUser'>{this.props.payload.email}</div>
                </div>
                <div className="link-wrap">
                    <div>
                        <Link to="/dashboard" className="links">
                            <button>Home</button> 
                        </Link>
                    </div>
                    <div>
                        <Link to="/post/:postid" className="links"> 
                            <button>New Post</button>
                        </Link> 
                    </div>
                    <div>
                        <Link to="/" className="links">
                            <button>Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => { // accesses the data in your store and passes it into your component as a property it can pass whatever pieces of the store you want to 
//     const {username, profilePicture, id} = state; // Take the username and profile picture off of the Redux state.
//     return {username: username, profile_picture: profilePicture, id: id} // assign the values 
// }

export default connect(state => state)(Nav); // call connect connecting the component and making it aware of the applications store or user data and exporting that instead (making it a smart component)