import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Rules from './components/Rules/Rules';
import Plans from './components/Plans/Plans';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Courses />
      <Rules />
      <Plans />
    </div>
  );
}

export default App;
