import { useState } from 'react';
import FacultyLogin from './components/FacultyLogin';
import FacultyDashboard from './components/FacultyDashboard';
import CreateExam from './components/CreateExam';
import { dummyQuestions } from './dummyData';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login'); // login | dashboard | generate
  const [faculty, setFaculty] = useState(null);
  const [questions, setQuestions] = useState(dummyQuestions);

  const updateQuestion = (id, updatedFields) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updatedFields } : q))
    );
  };

  const handleLoginSuccess = (facultyData) => {
    setFaculty(facultyData);
    setCurrentView('dashboard');
  };

  return (
    <div className="app-container">
      <header>
        <h1>AI Question Paper Generator</h1>
      </header>

      <main>
        {currentView === 'login' && (
          <FacultyLogin onLoginSuccess={handleLoginSuccess} />
        )}

        {currentView === 'dashboard' && (
          <FacultyDashboard
            facultyEmail={faculty?.email}
            onNavigate={setCurrentView}
          />
        )}

        {currentView === 'generate' && (
          <CreateExam
            questions={questions}
            onUpdateQuestion={updateQuestion}
            onBack={() => setCurrentView('dashboard')}
          />
        )}
      </main>
    </div>
  );
}

export default App;