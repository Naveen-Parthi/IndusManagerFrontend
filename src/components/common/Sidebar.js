import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import logo from './logo.png'
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><img src={logo} alt="Indus Logo" className="logo-image" /></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/leave-approval">Leave Approval</NavLink></li>
          <li><NavLink to="/leave-request">Leave Request</NavLink></li>
          <li><NavLink to="/team-list">Team List</NavLink></li>
          <li><NavLink to="/feedback">Feedback</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;