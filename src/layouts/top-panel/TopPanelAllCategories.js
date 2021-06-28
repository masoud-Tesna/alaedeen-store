import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

import { useTranslate as __ } from "../../functions/Func";

import { useHistory, useLocation }    from "react-router-dom";

const TopPanelAllCategories = () => {

  const location = useLocation();

  let history = useHistory();

  const goToPreviousPath = () => {
    location.pathname === '/' ?
      window.location.href = "http://hornb2b.com" :
      history.goBack();
  }

  return (
    <Row className="m-0 p-0">
    <Col className="m-0 p-0 topPanel__bgColor" xs={12}>
      <Row className="m-0 p-0">
        <Col className="topPanel__topSection custom m-0 p-0" xs={12}>
          <Row className={`m-0 p-0 justify-content-between`}>
            <Col className={`m-0 p-0 topPanel__topSection--sticky scrolled`}>
              <Row className="m-0 p-0">
                <Col className="text-left pr-0 my-auto topPanel__topSection--col2" xs={2}>
                  <i className="fa fa-chevron-left vv-font-size-2 text-white" onClick={() => { goToPreviousPath() }} />
                </Col>
                <Col className="text-right pl-0 topPanel__topSection--container topPanel__topSection--col10" xs={10}>
                  <Row className="m-0 p-0 justify-content-end">
                    <Col className="m-0 p-0 topPanel__topSection--form" xs={12}>
                      <div className="form--bgOpacity" />

                      <Form onSubmit={e => { e.preventDefault() }}>
                        <InputGroup className="">
                          <FormControl
                            placeholder= { __('search') }
                            aria-label= { __('search') }
                            aria-describedby="searchTopPanelBtn"
                            className="border-0 topPanel__topSection--searchInput vv-font-size-1-5 bg-transparent text-white shadow-none p-0 m-0 ml-3"
                          />
                          <InputGroup.Append>
                            <InputGroup.Text id="searchTopPanelBtn" className="m-0 p-0 border-0 bg-transparent">
                              <Button variant="primary" type="submit" className="p-0 m-0 bg-transparent border-0">
                                <i className="far fa-search text-white vv-font-size-1-5 pr-3" />
                              </Button>
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form>

                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
  );
};

export default TopPanelAllCategories;