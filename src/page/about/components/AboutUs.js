import React, { Component } from "react";
import { Col, Row }         from "react-bootstrap";
import EmbedVideo           from "../../../layouts/common/EmbedVideo";


class AboutUs extends Component {
  render () {
    return (
      <Row className="m-0 p-0 AboutUs__container">
        <Col className="m-0 p-0 mt-4 pt-1 AboutUs__container--title" xs={12}>
          <span className="vv-font-size-1-8 font-weight-bold text-47">About Us</span>
        </Col>
        <Col className="m-0 p-0 mt-3 AboutUs__container--videos" xs={12}>
          <div className="AboutUs__videos--container">
            <div className="AboutUs__video--embed">
              <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/pZD1s/vt/frame" extraClassName = "rounded-10" />
            </div>

            <div className="AboutUs__video--embed">
              <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/pZD1s/vt/frame" extraClassName = "rounded-10" />
            </div>

            <div className="AboutUs__video--embed">
              <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/pZD1s/vt/frame" extraClassName = "rounded-10" />
            </div>

            <div className="AboutUs__video--embed">
              <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/pZD1s/vt/frame" extraClassName = "rounded-10" />
            </div>
          </div>
        </Col>
        <Col className="m-0 p-0 vv-font-size-1-2rem text-70 AboutUs__container--description" xs={12}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem eligendi ipsa nulla quo saepe soluta ullam. Dolore, quidem, ut! Accusamus fugit id ipsam itaque laboriosam nam, porro soluta sunt. Aspernatur dicta esse ipsam libero natus neque nisi sint, tenetur?
        </Col>
      </Row>
    );
  }
}

export default AboutUs;