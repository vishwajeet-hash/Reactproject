import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar bg="light" className="navbar">
        <Container>
          <Navbar.Brand className="brandName">ATGWORLD</Navbar.Brand>
          <i>
            <div className="searchBar">
              <AiOutlineSearch className="searchIcon"/>
              <span className="searchText">Search for your favorite groups in ATG</span>
              </div>
          </i>
        </Container>
        
      </Navbar>
      {/* <br /> */}
      <div className="frontbg">
      </div>
      <div className="bgLayout">
          <img src=""></img>
        </div>
    </div>
  );
}

export default App;
