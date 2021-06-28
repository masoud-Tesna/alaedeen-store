import React                         from "react";
import { Col, ResponsiveEmbed, Row } from "react-bootstrap";

const EmbedVideo = ({ embedLink, extraClassName }) => {
  return (
    <>
      <Row className="m-0 p-0">
        <Col className="m-0 p-0" xs={12}>
          <ResponsiveEmbed aspectRatio="16by9" className={extraClassName}>
            <embed type="image/svg+xml" src={embedLink} />
          </ResponsiveEmbed>
        </Col>
      </Row>
    </>
  );
};

export default EmbedVideo;