// import style file:
import './styles/About.less';

// import And Design Co,ponents used:
import { Col, Row } from "antd";

import { useTranslation } from "react-i18next";
import { __ } from "../functions/Helper";
import ShowVideoEmbed from "../layouts/blocks/static_templates/ShowVideoEmbed";

const About = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-4 about--container">
      <Col span={24} className="about--aboutUs__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('about us')) }
          </Col>
          <Col span={24} className="about--aboutUs__videosSection">
            <div className="about--aboutUs__videos">
              <div className="about--aboutUs__video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--aboutUs__video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--aboutUs__video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>

              <div className="about--aboutUs__video">
                <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'aboutPage'} embedClassName = "rounded-10" />
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { About };
