import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/pages/Home.jsx'
import PatientAndVisitors from './components/pages/PatientsAndVisitors.jsx';
import FindDoctor from './components/pages/FindDoctor.jsx';
import MedicalRecords from './components/pages/MedicalRecords.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/find-doctor" element={<FindDoctor/>}></Route>
        <Route path='/patients-visitors' element={<PatientAndVisitors/>} />
        <Route path="/patients-visitors/medical-records" element={<MedicalRecords/>} />
      </Routes>
    </Router>
  );
}

export default App;
