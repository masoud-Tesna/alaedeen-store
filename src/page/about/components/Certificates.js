import React, { Component }               from "react";
import { Col, Image, Modal, Row } from "react-bootstrap";



function CertificateImageModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className = "m-0 p-0">
          <Col className = "m-0 p-0" xs={12}>
            <Image src={props.content} alt={ props.headTitle } thumbnail />
          </Col>
          <Col className = "m-0 p-0 text-white text-center vv-font-size-1-5 mt-3" xs={12}>
            { props.headTitle }
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}


class Certificates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      certificateImageModalShow: false,
      certificateImageSrc: "",
      certificateImageTitle: ""
    };
  }

  render () {
    return (
      <Row className="m-0 p-0 Certificates__container">

        <Col className="m-0 p-0 mt-3 Certificates__container--title" xs={12}>
          <span className="vv-font-size-1-8 font-weight-bold text-47">Certificates</span>
        </Col>
        <Col className="m-0 p-0 mt-3 Certificates__container--images" xs={12}>
          <div className="Certificates__images--container">
            <div className="Certificates__image--item">
              <Row className="m-0 p-0">
                <Col
                  className = "m-0 p-0 Certificates__image--background"
                  xs={12}
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/certificate1.png'})`}}
                  onClick={() => this.setState({
                    certificateImageModalShow: true,
                    certificateImageSrc: `${process.env.PUBLIC_URL + '/images/certificate1.png'}`,
                    certificateImageTitle: "CoC"
                  })} />
                <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={12}>CoC</Col>
              </Row>
            </div>

            <div className="Certificates__image--item">
              <Row className="m-0 p-0">
                <Col
                  className = "m-0 p-0 Certificates__image--background"
                  xs={12}
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/certificate2.png'})`}}
                  onClick={() => this.setState({
                    certificateImageModalShow: true,
                    certificateImageSrc: `${process.env.PUBLIC_URL + '/images/certificate2.png'}`,
                    certificateImageTitle: "ISO 9001"
                  })} />
                <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={12}>ISO 9001</Col>
              </Row>
            </div>

            <div className="Certificates__image--item">
              <Row className="m-0 p-0">
                <Col
                  className = "m-0 p-0 Certificates__image--background"
                  xs={12}
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/certificate3.png'})`}}
                  onClick={() => this.setState({
                    certificateImageModalShow: true,
                    certificateImageSrc: `${process.env.PUBLIC_URL + '/images/certificate3.png'}`,
                    certificateImageTitle: "ISIRI"
                  })} />
                <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={12}>ISIRI</Col>
              </Row>
            </div>

            <div className="Certificates__image--item">
              <Row className="m-0 p-0">
                <Col
                  className = "m-0 p-0 Certificates__image--background"
                  xs={12}
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/certificate4.png'})`}}
                  onClick={() => this.setState({
                    certificateImageModalShow: true,
                    certificateImageSrc: `${process.env.PUBLIC_URL + '/images/certificate4.png'}`,
                    certificateImageTitle: "ISIRI"
                  })} />
                <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={12}>ISIRI</Col>
              </Row>
            </div>
          </div>

          <CertificateImageModal
            show={this.state.certificateImageModalShow}
            onHide={() => this.setState({certificateImageModalShow: false})}
            content={this.state.certificateImageSrc}
            headTitle={this.state.certificateImageTitle}
            className="test-style"
          />

        </Col>
      </Row>
    );
  }
}

export default Certificates;