import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import Search from './Search.jsx';
import RoomList from './RoomList.jsx';
import Sidebar from './Sidebar.jsx';
import sampleVideoData from '../../../../database/sampleVideoData.js';
import RoomView from '../Room/RoomView.jsx';
import axios from 'axios';
import PreviewRoom from './RoomPreview.jsx';
// import io from 'socket.io-client';
//
//
// const lobby = io('/lobby');

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: sampleVideoData[0].snippet.thumbnails.default.url,
      selectedRoom: null,
      createRoomText: ''
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Browse Rooms</h1>
        <button onClick={()=> this.props.createRoom(this.state.createRoomText)}>Create Rooms: </button>
        <input onChange={(e)=> this.setState({createRoomText: e.target.value}) } placeholder={'enter new room name'}/>
          <div className="wrapper">
            {!this.state.selectedRoom && (this.props.roomList.map((el, key) => (<Link id={el.id} key={key} to="/rooms"> <PreviewRoom ex={el.roomName}
            enterRoom={this.props.selectRoom} roomid={el.id} key={key} thumbnail={el.thumbnail}/> </Link> )))}
            {/*this.state.selectedRoom && (<RoomView id={this.state.selectedRoom}/>)*/}


          </div>

      </div>
    );
  }
}

export default Homepage;

// ReactDOM.render(<App />, document.getElementById('homepage'));
