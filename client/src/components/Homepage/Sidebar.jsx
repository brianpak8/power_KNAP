import React from 'react';
import RoomListEntry from './RoomListEntry.jsx';

const Sidebar = (props) => (
  <div>
    <h3>Sidebar</h3>
    {props.rooms.map((room, idx) => (<RoomListEntry room={room} key={idx}/>))}
  </div>
);

export default Sidebar;
