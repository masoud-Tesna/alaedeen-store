// import style:
import './styles/HomeCarousel.less';

// import ANT Design Components:
import { Col, Row, Carousel  } from "antd";
import { useWindowSize } from "../../../functions";
import { useGetStoreState } from "../../../contexts/store/StoreContext";

const HomeCarousel = () => {

  const { storeSettings } = useGetStoreState();

  const sliderDesktopImages = storeSettings?.slider?.slider_images?.D || [];

  const sliderMobileImages = storeSettings?.slider?.slider_images?.M || [];

  const { width } = useWindowSize();

  return (
    <Row className="homeCarousel--container">
      <Col className="homeCarousel--content" span={24}>
        <Carousel className="homeCarousel--items" autoplay draggable={true} pauseOnDotsHover={true} rtl={true}>

          {
            width >= 768 ?
              sliderDesktopImages && sliderDesktopImages.map((sliderDesktopImage, index) => {
                return (
                  <div key={`${sliderDesktopImage.field_id}_${sliderDesktopImage.position}_${sliderDesktopImage.image_for}_${index}`} className="homeCarousel--item">
                    <img className="d-block w-100" src={sliderDesktopImage.value} alt={ `slide ${sliderDesktopImage.position} Desktop` } />
                  </div>
                );
                }) :

              sliderMobileImages && sliderMobileImages.map((sliderMobileImage, index) => {
                return (
                  <div key={`${sliderMobileImage.field_id}_${sliderMobileImage.position}_${sliderMobileImage.image_for}_${index}`} className="homeCarousel--item">
                    <img className="d-block w-100" src={sliderMobileImage.value} alt={ `slide ${sliderMobileImage.position} Mobile` } />
                  </div>
                );
              })
          }
        </Carousel>
      </Col>
    </Row>
  );
};

export default HomeCarousel;