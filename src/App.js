import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Rules from './components/Rules/Rules';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Courses />
      <Rules />
    </div>
  );
}

export default App;
