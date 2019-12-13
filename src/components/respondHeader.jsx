import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/index';

class RespondHeader extends React.Component{
	constructor(props){
		super(props);
		this.ref = React.createRef();
	}
	navHidden=()=>{
		if(this.ref && this.ref.current ) this.ref.current.checked=false;
	}
	render(){
		return(
			<div className="navigation">
			  <div className="navigation__heading">
               <Link onClick={this.navHidden} to='/'>
                <h1>
                	Spear
                </h1>  
                </Link>
			  </div>
			  <input type="checkbox" ref={this.ref} className="navigation__checkbox" id="nav-toggle" />
			  <label htmlFor="nav-toggle" className="navigation__button">
			    <span className="navigation__icon"></span>
			  </label>
			  <div className="navigation__background">&nbsp;</div>
			  <div className="navigation__nav">
			    <ul className="navigation__list">
			      <li className="navigation__item">
			        <Link to="/" onClick={this.navHidden}>
			          Home
			          <span></span>
			          <span></span>
			          <span></span>
			          <span></span>
			        </Link>
			      </li>
			      <li className="navigation__item">
			        <Link onClick={this.navHidden} to="/shopping/men">
			         Men 
			         <span></span>
			          <span></span>
			          <span></span>
			          <span></span>
			        </Link>
			      </li>
			      <li className="navigation__item">
			        <Link onClick={this.navHidden} to="/shopping/women">
			          Women <span></span>
			          <span></span>
			          <span></span>
			          <span></span>
			        </Link>
			      </li>
			      { this.props.user && this.props.user['name'] ? ( 
			      	<React.Fragment>
			      <li className="navigation__item">
			        <Link onClick={this.navHidden} to="/user">
			          Profile
			          <span></span>
			          <span></span>
			          <span></span>
			          <span></span>
			        </Link>
			      </li>
			       <li className="navigation__item">
			        <button onClick={()=>{this.props.logout()}}>
			          Log out
			          <span></span>
			          <span></span>
			          <span></span>
			          <span></span>
			        </button>
			      </li>
			      </React.Fragment>
			       ) :
			      ( <React.Fragment>
			      	<li className="navigation__item">
			        <Link onClick={this.navHidden} to="/login">
			          sign in
			          <span></span>
			          <span></span>
			          <span></span>
			          <span></span>
			        </Link>
			      </li>
			      <li className="navigation__item">
			        <Link onClick={this.navHidden} to="/signup">
			          sign up 
			          <span></span>
			          <span></span>
			          <span></span>
			          <span></span>
			        </Link>
			      </li>
			      </React.Fragment>
			      )
			  }
			    </ul>
			  </div>
            </div>
            )
	}
}

const mapState=(state)=>{
	return{
		user:state.user
	}
}
export default connect(mapState,{logout})(RespondHeader);