import { Pagination, Col, Row } from 'react-bootstrap';

const Paginate = ({ prev, next, handlerPage }) => {
  const handlerNext = () => {
    /*aca separo el endpoin que envia next, mediante .split(?) y lo destructuro*/
    const [, query] = next.split('?');
    console.log(query);
    handlerPage(query);
  };

  const handlerPrev = () => {
    const [, query] = prev.split('?');
    handlerPage(query);
  };

  return (
    <Row>
      <Col className="mt-3">
        <Pagination className="justify-content-center" size="lg">
          {!!prev && <Pagination.Prev onClick={handlerPrev} />}{' '}
          {/*evaluo si prev es true para mostrar elemento previo */}
          <Pagination.Next onClick={handlerNext} />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Paginate;
