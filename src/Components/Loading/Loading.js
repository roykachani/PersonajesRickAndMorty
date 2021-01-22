import { Row } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
  return (
    <Row className="justify-content-center">
      <ClipLoader size={150} />
    </Row>
  );
};
export default Loading;
