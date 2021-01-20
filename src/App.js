import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Characters from './Components/characters';
import Search from './Components/Search';
import './App.css';

function App() {
  const [search, setSearch] = useState();

  const handlerSearch = (value) => {
    setSearch(value);
  };

  return (
    <Container>
      <Search handlerSearch={handlerSearch} />
      <Characters search={search} />
    </Container>
  );
}

export default App;
