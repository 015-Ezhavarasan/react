import './App.css'; 
import StudentDetails from './student-details.jsx'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Student Details App</h1>
      </header>
      <main>
        <StudentDetails /> {/* Render the StudentDetails component */}
      </main>
      <footer>
        {/* You can add footer content here if needed */}
      </footer>
    </div>
  );
}

export default App;
