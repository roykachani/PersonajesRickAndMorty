import { Spinner, Row } from 'react-bootstrap';

const Loading = () => {
  return (
    <Row>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Row>
  );
};
export default Loading;
