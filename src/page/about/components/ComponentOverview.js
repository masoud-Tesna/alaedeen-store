import React, { Component } from "react";
import { Col, Row }         from "react-bootstrap";

class ComponentOverview extends Component {
  render () {
    return (
      <Row className="m-0 p-0 ComponentOverview__container">
        <Col className="m-0 p-0 mt-5 ComponentOverview__container--title" xs={12}>
          <span className="vv-font-size-1-8 font-weight-bold text-47">Component Overview</span>
        </Col>
        <Col className="m-0 p-0 mt-3" xs={12}>
          <Row className="m-0 p-0 ComponentOverview__container--value">
            <Col className="m-0 p-0 py-4 ComponentOverview__value--item" xs={12}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-92" xs={6}>Business Type</Col>
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-47" xs={6}>manufacture</Col>
              </Row>
            </Col>

            <Col className="m-0 p-0 py-4 ComponentOverview__value--item" xs={12}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-92" xs={6}>Year Established</Col>
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-47" xs={6}>2015</Col>
              </Row>
            </Col>

            <Col className="m-0 p-0 py-4 ComponentOverview__value--item" xs={12}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-92" xs={6}>Total Employees</Col>
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-47" xs={6}>11 - 50 People</Col>
              </Row>
            </Col>

            <Col className="m-0 p-0 py-4 ComponentOverview__value--item" xs={12}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-92" xs={6}>Main Products</Col>
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-47" xs={6}>Camouflage Uniform, Tactical Clothes, Security Clothes, Workwear</Col>
              </Row>
            </Col>

            <Col className="m-0 p-0 py-4 ComponentOverview__value--item" xs={12}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-92" xs={6}>Country / Region </Col>
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-47" xs={6}>Tehran, Iran</Col>
              </Row>
            </Col>

            <Col className="m-0 p-0 py-4 ComponentOverview__value--item" xs={12}>
              <Row className="m-0 p-0">
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-92" xs={6}>Main Markets</Col>
                <Col className = "m-0 p-0 vv-font-size-1-2rem text-47" xs={6}>
                  <span className="d-block vv-font-size-1-2rem text-47">Iraq 30.00%</span>
                  <span className="d-block vv-font-size-1-2rem text-47">Syria 20.00%</span>
                  <span className="d-block vv-font-size-1-2rem text-47">Armenia 10.00%</span>
                </Col>
              </Row>
            </Col>

          </Row>
        </Col>
      </Row>
    );
  }
}

export default ComponentOverview;