import React from 'react';
import { Link } from 'react-router-dom';
// import LoginButton from './LoginButton';
// import SearchBox from './SearchBox';

const SiteNavBar = function (props) {
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="toHomePage">Home </Link>
      <Link to="/rooms" className="toRooms">Room</Link>)
      {/* {!props.isLoggedin && (<LoginButton triggerLogin={props.triggerLogin} />)}
      {props.isLoggedin && (<Link to="/match">Find a Match </Link>)}
      {props.isLoggedin && (<Link to="/viewMatches">View Your Matches </Link>)}
      <SearchBox searchHandler={props.searchHandler} /> */}
    </div>
  );
};

export default SiteNavBar;
