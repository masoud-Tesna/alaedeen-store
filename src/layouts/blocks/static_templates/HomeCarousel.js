// import style:
import './styles/HomeCarousel.less';

// import ANT Design Components:
import { Col, Row, Carousel  } from "antd";
import { useWindowSize } from "../../../functions";

const HomeCarousel = () => {
  const { width } = useWindowSize();

  const imageHeight = width >= 768 ? 441 : 166;

  return (
    <Row className="homeCarousel--container">
      <Col className="homeCarousel--content" span={24}>
        <Carousel className="homeCarousel--items" autoplay>
          <div className="homeCarousel--item">
            <img className="d-block w-100" src={`https://picsum.photos/1600/${imageHeight}`} alt="First slide" />
          </div>
          <div className="homeCarousel--item">
            <img className="d-block w-100" src={`https://picsum.photos/1600/${imageHeight}`} alt="Second slide" />
          </div>
          <div className="homeCarousel--item">
            <img className="d-block w-100" src={`https://picsum.photos/1600/${imageHeight}`} alt="Third slide" />
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default HomeCarousel;