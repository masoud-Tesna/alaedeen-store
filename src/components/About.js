// import style file:
import './styles/About.less';

// import And Design Components used:
import { Col, Row } from "antd";

import { useTranslation } from "react-i18next";
import { __, useSetLoaded } from "../functions/Helper";
import ShowVideoEmbed from "../layouts/blocks/static_templates/ShowVideoEmbed";

// import certificate images:
import certificate1 from '../assets/images/certificate1.png';
import certificate2 from '../assets/images/certificate2.png';
import certificate3 from '../assets/images/certificate3.png';
import certificate4 from '../assets/images/certificate4.png';
import { useEffect, useState } from "react";
import LoadSpinner from "../layouts/blocks/static_templates/LoadSpinner";

const About = () => {
  const { t } = useTranslation();

  const { isLoaded } = useSetLoaded();

  useEffect(() => {
    document.getElementById('HornStoreApp').scrollIntoView()
  }, []);

  if (isLoaded) {
    return <LoadSpinner spinner={'default'} spinnerColor={'#2e8339'} />
  }

  return (
    <Row className="mt-4 about--container">
      <Col span={24} className="about--aboutUs__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('about us')) }
          </Col>
          <Col span={24} className="mt-3 about--videosSection">
            <div className="about--videos">
              <div className="about--video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>
            </div>
          </Col>
          <Col className="mt-3 text-70 about--aboutUs__description" span={24}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur deleniti, dolore doloremque magni non praesentium quaerat saepe sit tempore? Excepturi recusandae reprehenderit vel? Alias aliquam earum iste maiores mollitia odit optio quas sed, tempore ut! Cumque ex maiores maxime?
          </Col>
        </Row>
      </Col>

      <Col span={24} className="mt-5 about--componentOverview__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('Component Overview')) }
          </Col>
          <Col span={24} className="mt-3 about--componentOverview__tableSection">
            <Row className="row-cols-2 row-cols-md-4 " gutter={[16, 30]}>
              <Col className = "vv-font-size-1-2rem text-92" >Business Type</Col>
              <Col className = "vv-font-size-1-2rem text-47" >manufacture</Col>

              <Col className = "vv-font-size-1-2rem text-92" >Year Established</Col>
              <Col className = "vv-font-size-1-2rem text-47" >2015</Col>

              <Col className = "vv-font-size-1-2rem text-92" >Total Employees</Col>
              <Col className = "vv-font-size-1-2rem text-47" >11 - 50 People</Col>

              <Col className = "vv-font-size-1-2rem text-92" >Main Products</Col>
              <Col className = "vv-font-size-1-2rem text-47" >Camouflage Uniform, Tactical Clothes, Security Clothes, Workwear</Col>

              <Col className = "vv-font-size-1-2rem text-92" >Country / Region </Col>
              <Col className = "vv-font-size-1-2rem text-47" >Tehran, Iran</Col>

              <Col className = "vv-font-size-1-2rem text-92" >Main Markets</Col>
              <Col className = "vv-font-size-1-2rem text-47" >
                <span className="d-block vv-font-size-1-2rem text-47">Iraq 30.00%</span>
                <span className="d-block vv-font-size-1-2rem text-47">Syria 20.00%</span>
                <span className="d-block vv-font-size-1-2rem text-47">Armenia 10.00%</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="mt-5 about--manufacturingCapability__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('Manufacturing Capability')) }
          </Col>
          <Col span={24} className="mt-3 about--videosSection">
            <div className="about--videos">
              <div className="about--video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>
            </div>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="mt-5 about--certificates__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('Certificate')) }
          </Col>
          <Col span={24} className="mt-3 about--imagesSection">
            <div className="about--images">
              <div className="about--image">
                <Row>
                  <Col className = "about--imageBackground" span={24} style={{
                    backgroundImage: `url(${certificate1})`
                  }} />
                  <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={24}>CoC</Col>
                </Row>
              </div>

              <div className="about--image">
                <Row>
                  <Col className = "about--imageBackground" span={24} style={{
                    backgroundImage: `url(${certificate2})`
                  }} />
                  <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={24}>ISO 9001</Col>
                </Row>
              </div>

              <div className="about--image">
                <Row>
                  <Col className = "about--imageBackground" span={24} style={{
                    backgroundImage: `url(${certificate3})`
                  }} />
                  <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={24}>ISIRI</Col>
                </Row>
              </div>

              <div className="about--image">
                <Row>
                  <Col className = "about--imageBackground" span={24} style={{
                    backgroundImage: `url(${certificate4})`
                  }} />
                  <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={24}>CoC</Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="mt-5 about--another__section">
        <Row gutter={[0, 32]}>
          <Col className="cursor-pointer about--another__item about--rAndD__container" span={24}>
            <div className="about--another__bgImage" />
            <Row className="about--rAndD__content h-100" justify={"space-between"}>
              <Col className="pl-4 my-auto">
                <Row>
                  <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                    { t(__('R&D Capability')) }
                  </Col>
                  <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                    { t(__('View More R&D Capability')) }
                  </Col>
                </Row>
              </Col>
              <Col className="my-auto pr-4 about--another__icon">
                <i className="fa fa-chevron-right vv-font-size-2 text-white" />
              </Col>
            </Row>
          </Col>

          <Col className="cursor-pointer about--another__item about--qualityControl__container" span={24}>
            <div className="about--another__bgImage" />
            <Row className="about--qualityControl__content h-100" justify={"space-between"}>
              <Col className="pl-4 my-auto">
                <Row>
                  <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                    { t(__('Quality Control')) }
                  </Col>
                  <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                    { t(__('View More Quality Control')) }
                  </Col>
                </Row>
              </Col>
              <Col className="my-auto pr-4 about--another__icon">
                <i className="fa fa-chevron-right vv-font-size-2 text-white" />
              </Col>
            </Row>
          </Col>

          <Col className="cursor-pointer about--another__item about--exportCapability__container" span={24}>
            <div className="about--another__bgImage" />
            <Row className="about--exportCapability__content h-100" justify={"space-between"}>
              <Col className="pl-4 my-auto">
                <Row>
                  <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                    { t(__('Export Capability')) }
                  </Col>
                  <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                    { t(__('View More Export Capability')) }
                  </Col>
                </Row>
              </Col>
              <Col className="my-auto pr-4 about--another__icon">
                <i className="fa fa-chevron-right vv-font-size-2 text-white" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { About };
