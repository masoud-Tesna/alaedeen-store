import React, { Component } from "react";
import { Col, Row }         from "react-bootstrap";

class AnotherContent extends Component {
  render () {
    return (
      <Row className="m-0 p-0 AnotherContent__container">
        <Col className = "m-0 p-0 AnotherContent__rAndD--container" xs={12}>
          <div className="AnotherContent__bgImage"></div>
          <Row className="m-0 p-0 AnotherContent__content h-100">
            <Col className="m-0 p-0 pl-4 my-auto" xs={11}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 mb-3 vv-font-size-1-8 text-white AnotherContent--title" xs={12}>
                  R&D Capability
                </Col>
                <Col className = "m-0 p-0 vv-font-size-1-4 text-white AnotherContent--viewMore" xs={12}>
                  View More R&D Capability
                </Col>
              </Row>
            </Col>
            <Col className="m-0 p-0 my-auto AnotherContent--icon" xs={1}>
              <i className = "fa fa-chevron-right vv-font-size-2 text-white"></i>
            </Col>
          </Row>
        </Col>

        <Col className = "m-0 p-0 AnotherContent__qualityControl--container" xs={12}>
          <div className="AnotherContent__bgImage"></div>
          <Row className="m-0 p-0 AnotherContent__content h-100">
            <Col className="m-0 p-0 pl-4 my-auto" xs={11}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 mb-3 vv-font-size-1-8 text-white AnotherContent--title" xs={12}>
                  Quality Control
                </Col>
                <Col className = "m-0 p-0 vv-font-size-1-4 text-white AnotherContent--viewMore" xs={12}>
                  View More Quality Control
                </Col>
              </Row>
            </Col>
            <Col className="m-0 p-0 my-auto AnotherContent--icon" xs={1}>
              <i className = "fa fa-chevron-right vv-font-size-2 text-white"></i>
            </Col>
          </Row>
        </Col>

        <Col className = "m-0 p-0 AnotherContent__exportCapability--container" xs={12}>
          <div className="AnotherContent__bgImage"></div>
          <Row className="m-0 p-0 AnotherContent__content h-100">
            <Col className="m-0 p-0 pl-4 my-auto" xs={11}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 mb-3 vv-font-size-1-8 text-white AnotherContent--title" xs={12}>
                  Export Capability
                </Col>
                <Col className = "m-0 p-0 vv-font-size-1-4 text-white AnotherContent--viewMore" xs={12}>
                  View More Export Capability
                </Col>
              </Row>
            </Col>
            <Col className="m-0 p-0 my-auto AnotherContent--icon" xs={1}>
              <i className = "fa fa-chevron-right vv-font-size-2 text-white"></i>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default AnotherContent;