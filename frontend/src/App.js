import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import UserCreate from './routes/UserCreate';

function App() {
  return (
    <div className="App">
      <Container>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/create">User Create</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<UserCreate />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
