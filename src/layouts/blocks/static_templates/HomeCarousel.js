// import style:
import './styles/HomeCarousel.less';

import sofa from "../../../assets/images/sofa.png";

// import ANT Design Components:
import { Col, Row, Carousel  } from "antd";

const HomeCarousel = () => {
  return (
    <Row className="homeCarousel--container">
      <Col className="homeCarousel--content" span={24}>
        <Carousel className="homeCarousel--items" autoplay>
          <div className="homeCarousel--item">
            <img className="d-block w-100" src={"https://picsum.photos/1600/441"} alt="First slide" />
          </div>
          <div className="homeCarousel--item">
            <img className="d-block w-100" src={"https://picsum.photos/1600/441"} alt="Second slide" />
          </div>
          <div className="homeCarousel--item">
            <img className="d-block w-100" src={"https://picsum.photos/1600/441"} alt="Third slide" />
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default HomeCarousel;