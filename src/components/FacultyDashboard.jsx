import React from 'react';
import './FacultyDashboard.css';

const FacultyDashboard = ({ facultyEmail, onNavigate }) => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h2>Welcome, {facultyEmail}</h2>
        <p>Faculty Dashboard</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card active" onClick={() => onNavigate('generate')}>
          <h3>📝 Create New Exam</h3>
          <p>Generate a new question paper using AI</p>
        </div>

        <div className="dashboard-card disabled">
          <h3>📚 My Courses</h3>
          <p>Coming soon</p>
        </div>

        <div className="dashboard-card disabled">
          <h3>🗂️ Question Bank</h3>
          <p>Coming soon</p>
        </div>

        <div className="dashboard-card disabled">
          <h3>📊 Reports & Analytics</h3>
          <p>Coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;