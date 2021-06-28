import React, { useEffect, useState }         from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useTranslate as __ }                 from "../../functions/Func";
import LoaderSpinner                  from "../../layouts/blocks/LoaderSpinner";

const SendInquiry = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  return (
    <>
      { isLoaded && <LoaderSpinner />}
      <Col className="m-0 p-0 sendInquiry__content" xs={12}>
        <Row className = "m-0 p-0">
          <Col className = "m-0 p-0 px-2-5-rem" xs={12}>
            <Row className = "m-0 p-0">
              <Col className = "m-0 p-0" xs={12}>{ __('to') }: (Nilper.)</Col>
              <Form className="sendInquiry__form" onSubmit={e => { e.preventDefault() }}>
                <Col className = "m-0 py-4 px-3 mt-3 rounded-10 bg-white shadow-lg" xs={12}>
                  <Col className = "m-0 p-0" xs={12}>
                    <div className="vv-font-size-1-5 text-70" dangerouslySetInnerHTML={{ __html: __('Send Inquiry form message') }} />
                  </Col>

                  <Col className = "m-0 py-0 px-3 mt-5" xs={12}>
                    <div className = "sendInquiry__form--checkbox">
                      <input type = "checkbox" id = "formBasicCheckbox" className = "form-check-input" />
                      <label title = "" htmlFor = "formBasicCheckbox" className = "form-check-label vv-font-size-1-5 text-70">Check me out</label>
                    </div>
                  </Col>

                  <Col className = "m-0 py-0 px-3 mt-4" xs={12}>
                    <div className = "sendInquiry__form--checkbox">
                      <input type = "checkbox" id = "formBasicCheckbox2" className = "form-check-input" />
                      <label title = "" htmlFor = "formBasicCheckbox2" className = "form-check-label vv-font-size-1-5 text-70">Check me out</label>
                    </div>
                  </Col>

                  <Col className="m-0 p-0 mt-6 text-center sendInquiry__form--submit" xs={12}>
                    <Button variant="primary" type="submit" className="p-0 m-0 bg-primary text-white vv-font-size-1-6 border-0 rounded-3">
                      Send
                    </Button>
                  </Col>

                </Col>
              </Form>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default SendInquiry;