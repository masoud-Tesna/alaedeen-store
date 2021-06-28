import React, { Component }    from "react";
import { Col, Row }            from "react-bootstrap";
import AboutUs                 from "./components/AboutUs";
import ComponentOverview       from "./components/ComponentOverview";
import ManufacturingCapability from "./components/ManufacturingCapability";
import Certificates            from "./components/Certificates";
import AnotherContent          from "./components/AnotherContent";
import LoaderSpinner           from "../../layouts/blocks/LoaderSpinner";

class AboutMain extends Component {
  constructor(props) {
    super (props);
    this.state = {
      isLoaded: true
    };
  }

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    this.setLoaded().then(() => this.setState({ isLoaded: false }));
  }

  setLoaded = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  }

  render () {
    if (this.state.isLoaded) {
      return <LoaderSpinner />
    }
    return (
      <Row className="m-0 p-0 pb-8">
        <Col className="m-0 py-0 AboutPage__AboutUs" xs={12}>
          <AboutUs />
        </Col>

        <Col className="m-0 py-0 AboutPage__ComponentOverview" xs={12}>
          <ComponentOverview />
        </Col>

        <Col className="m-0 py-0 AboutPage__ManufacturingCapability" xs={12}>
          <ManufacturingCapability />
        </Col>

        <Col className="m-0 py-0 AboutPage__Certificates" xs={12}>
          <Certificates />
        </Col>

        <Col className="m-0 p-0 AboutPage__AnotherContent" xs={12}>
          <AnotherContent />
        </Col>
      </Row>
    );
  }
}

export default AboutMain;