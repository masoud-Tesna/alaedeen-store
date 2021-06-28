import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

import { useTranslate as __ } from "../../functions/Func";

import { useHistory, useLocation }    from "react-router-dom";

const TopPanelChat = () => {

  const location = useLocation();

  let history = useHistory();

  const goToPreviousPath = () => {
    location.pathname === '/' ?
      window.location.href = "http://hornb2b.com" :
      history.goBack();
  }

  return (
    <Row className="m-0 p-0 bg-footer topPanelSendInquiry__container">
      <Col className = "m-0 p-0 pl-2-5-rem my-auto" xs={2} onClick={() => { goToPreviousPath() }}>
        <i className = "fal fa-chevron-left text-white vv-font-size-2" />
      </Col>

      <Col className = "m-0 p-0 vv-font-size-1-8 text-white my-auto" xs={10}>
        Nilper
      </Col>
    </Row>
  );
};

export default TopPanelChat;