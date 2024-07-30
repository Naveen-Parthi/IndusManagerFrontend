import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import ManagerDashboard from './components/ManagerDashboard/ManagerDashboard';
import Sidebar from './components/common/Sidebar';
import ApplyLeave from './components/LeaveRequest/ApplyLeave';
import FeedbackPage from './components/Feedback/Feedback';
import TeamList from './components/Team List/TeamList';
import LeaveApproval from './components/LeaveApproval/LeaveApproval';


function App() {
  const [show, setShow] = useState(false);
  useEffect(()=>{
    setShow(window.location.pathname != "/")
  }, [window.location.href])
  return (
    <>
    {show && <Sidebar />}
    <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/dashboard" element={<ManagerDashboard />} />
    <Route path="/leave-request" element={<ApplyLeave/>} /> {/* Add the new route */}
    <Route path="/feedback" element={<FeedbackPage/>} /> {/* Add the new route */}
    <Route path="/team-list" element={<TeamList/>} /> {/* Add the new route */}
    <Route path="/leave-approval" element={<LeaveApproval/>} /> {/* Add the new route */}
    {/* Add more routes as needed */}
    </Routes>
    </>
    );
}

export default App;
