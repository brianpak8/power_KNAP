import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './Home';
// import SignupPage from './SignupPage';
// import SearchPage from './SearchPage';
// import MatchPage from './MatchPage';
import HomePage from '../Homepage/Homepage';
import RoomView from '../Room/RoomView';
import Javi from '../Homepage/Javi';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = props => (
  <main>
    <Switch>
      <Route exact path="/" render={() => (<HomePage filterRooms={props.filterRooms} roomList={props.roomList} createRoom={props.createRoom}/>  )} />
         <Route
        path="/javi"
        render={() => (<Javi />)}
      />
      {/* <Route path="/signup" component={SignupPage} /> */}
      <Route
        path="/rooms"
        render={() => (<RoomView room={props.selectedRoom}/>)}
      />
      {/* <Route path="/match" render={() => <MatchPage userId={props.userdata.userid} />} />
      <Route
        path="/event"
        render={() => (<EventPage
          userId={props.userdata.userid}
          event={props.selectedEvent}
        />
      )
    }
      />
      <Route path="/viewMatches" render={() => <ViewMatches userId={props.userdata.userid} />} /> */}
    </Switch>
  </main>
);

export default Main;
