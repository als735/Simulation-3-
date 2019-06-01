import React, {Component} from 'react'; 
import './Dashboard.css'; 
import Nav from '../Nav/Nav';


class Dashboard extends Component {
    render(){
         
        return(
            <div className='dashboard'>
                Dashboard  
                {this.props.location.pathname !== '/' ? <Nav/> : ' '}
            </div>
        )
    }
}

export default Dashboard; 