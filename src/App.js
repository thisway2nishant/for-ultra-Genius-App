import './App.css';
import Footer from './components/Footer';
//import HomeNavbar from './components/HomeNavbar';
// import HomePage from './components/HomePage';
import JobListPage from './components/JobListPage';
import UserNavbar from './components/UserNavbar';

function App() {
  return (
    <div className="App">
      <UserNavbar/>
      <JobListPage />
      <Footer/>
    </div>
  );
}

export default App;
