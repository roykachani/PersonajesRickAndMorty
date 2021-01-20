import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Search = ({ handlerSearch }) => {
  const [state, setstate] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerSearch(state);
  };

  const handlerInput = (e) => {
    setstate(e.target.value);
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={handlerSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Buscar personaje"
              onChange={handlerInput}
            />
          </Form.Group>
          <Button type="onSubmit">Buscar</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
