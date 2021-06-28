import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import EmbedVideo   from "../../../layouts/common/EmbedVideo";

class ManufacturingCapability extends Component {
  render () {
    return (
      <Row className="m-0 p-0 ManufacturingCapability__container">
        <Col className="m-0 p-0 mt-4 pt-1 ManufacturingCapability__container--title" xs={12}>
          <span className="vv-font-size-1-8 font-weight-bold text-47">Manufacturing Capability</span>
        </Col>
        <Col className="m-0 p-0 mt-3 ManufacturingCapability__container--videos" xs={12}>
          <div className="ManufacturingCapability__videos--container">
            <div className="ManufacturingCapability__video--embed">
              <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/pZD1s/vt/frame" extraClassName = "rounded-10" />
            </div>

            <div className="ManufacturingCapability__video--embed">
              <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/pZD1s/vt/frame" extraClassName = "rounded-10" />
            </div>

            <div className="ManufacturingCapability__video--embed">
              <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/pZD1s/vt/frame" extraClassName = "rounded-10" />
            </div>

            <div className="ManufacturingCapability__video--embed">
              <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/pZD1s/vt/frame" extraClassName = "rounded-10" />
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ManufacturingCapability;