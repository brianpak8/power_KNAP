import React from 'react';
import SiteNavBar from './SiteNavBar';
import Main from './Main';
import axios from 'axios';

// import LoginPage from './LoginPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allRooms: [{id:1, roomName:'first'}, {id:2, roomName:'second'}, {id:3, roomName:'third'} ,{id:4, roomName:'fourth'}],
      selectedRoom: {id:null, roomName:null},
    };
    this.selectRoom = this.selectRoom.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  selectRoom (roomId) {
    // if (this.state.selectedRoom.id === null) {
      console.log('look, a room has been selected');
      this.setState({selectedRoom: {id: roomId},
        // roomName: name
      })
      // this.selectRoom(this.state.selectedRoom.id, this.state.selectedRoom.roomName);
    // }
  }

  createRoom(roomName) {
    console.log('in the app',roomName);
  }

  componentDidMount() {
    axios.get('/allrooms')
      .then((data) => {
        //data = JSON.parse(data);
        //console.log('HEY!!!!!!!!', data);
        this.setState({allRooms: data.data});
      })
      .catch((err) => {console.log(err)})
  }

  render() {
    return (
      <div>
        <SiteNavBar />
        <Main roomList={this.state.allRooms} selectedRoom={this.state.selectedRoom}
        filterRooms={this.selectRoom} createRoom={this.createRoom}/>

      </div>
    );
  }
}

export default App;
