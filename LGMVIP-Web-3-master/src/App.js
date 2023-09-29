import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  const [students, setStudents] = useState([]);
  console.log(students);
  return (
    <div>
      <h1>Student Enrollment Form</h1>  
      <div className="App">
          <Form setStudents={setStudents} students={students}></Form>
          <Card students={students}></Card>
      </div>
    </div>
  );
}

export default App;
