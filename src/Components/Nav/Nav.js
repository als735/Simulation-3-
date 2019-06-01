import React, {Component} from 'react'; 
import './Nav.css'; 
import {Link} from "react-router-dom";


class Nav extends Component {
    render(){
         
        return(
            <div className='nav'> 
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

export default Nav; 