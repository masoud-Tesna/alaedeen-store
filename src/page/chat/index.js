import React, { useEffect, useState } from "react";
import LoaderSpinner                           from "../../layouts/blocks/LoaderSpinner";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { useTranslate as __ }                  from "../../functions/Func";

const Chat = () => {

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  const DefaultWordItem = ({ word }) => {
    return <div className = "border border-primary rounded-pill text-primary vv-font-size-1-6 font-weight-500 chatStickyDefaultWord__container--item">{ word }</div>
  }

  return (
    <>
      { isLoaded && <LoaderSpinner />}
      <Col className="m-0 p-0 chat__content" xs={12}>
        <Row className = "m-0 p-0">
          <Col className = "m-0 p-0 text-center text-bc vv-font-size-1-6" xs={12}>Probability of response in minutes</Col>

          <Col className="m-0 py-0 px-2-5-rem mt-4" xs={12}>
            <Row className = "m-0 p-0">
              <Col className = "m-0 px-3 py-4 rounded-10 shadow-line bg-white" xs={12}>
                <Row className="m-0 p-0 justify-content-center">
                  <Col className="m-0 p-0" xs={12}>
                    <Row className="m-0 p-0 justify-content-center">
                      <Col className="m-0 py-0 px-2 border-bottom border-bc" xs={11}>
                        <span className="float-left vv-font-size-1-6 text-70 font-weight-500">Product</span>

                        <span className="float-right vv-font-size-1-6 text-70 font-weight-500">ID:2548794</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="m-0 py-0 px-2 mt-2" xs={12}>
                    <Row className="m-0 p-0">
                      <Col className="m-0 p-0" xs={4}>
                        <div className="shadow rounded-top-5 chat__content--productImg">
                          <img
                            className = "rounded-circle- w-100"
                            src = "http://store.nilper.ir/image/cache/catalog/Product picture/Office Chair/850br-200x200.jpg"
                            alt = "Office Chair"
                          />
                        </div>
                      </Col>
                      <Col className="m-0 p-0" xs={8}>
                        <Row className="m-0 p-0">
                          <Col className="m-0 p-0 pt-2-rem vv-font-size-1-6 text-47 chat__content--productName" xs={12}>chair</Col>

                          <Col className="m-0 p-0 pt-2-rem vv-font-size-1-6 text-70 chat__content--productPrice" xs={12}>US $ 50-55 / Per</Col>

                          <Col className="m-0 p-0 pt-2-rem chat__content--productButton" xs={12}>
                            <Button variant="primary" className="p-0 m-0 bg-primary text-white vv-font-size-1-6 border-0 rounded-3">
                              Send Product
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col className="m-0 p-0 mt-2-5-rem chat__container" xs={12}>
            <Row className="m-0 p-0">
              <Col className="m-0 p-0 text-center vv-font-size-1-6 text-92" xs={12}>04/02/2021</Col>

              <Col className="m-0 p-0 mb-3 chat__container--item chat__send" xs={12}>
                <div className="d-inline-block border border-d4 rounded-3 chat__container--itemBody">
                  <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6 chat__container--text">Hi</div>

                  <div className="pr-3 text-92 vv-font-size-1-4 text-right chat__container--time">10:15</div>
                </div>
              </Col>

              <Col className="m-0 p-0 mb-3 chat__container--item chat__send" xs={12}>
                <div className="d-inline-block border border-d4 rounded-3 chat__container--itemBody">
                  <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6 chat__container--text">Do you have this product?</div>

                  <div className="pr-3 text-92 vv-font-size-1-4 text-right chat__container--time">10:16</div>
                </div>
              </Col>

              <Col className="m-0 p-0 mb-3 chat__container--item chat__receive" xs={12}>
                <div className="d-inline-block border border-d4 rounded-3 chat__container--itemBody">
                  <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6 chat__container--text">
                    Hi <br />
                    Yes ,we have.
                  </div>

                  <div className="pr-3 text-92 vv-font-size-1-4 text-right chat__container--time">10:16</div>
                </div>
              </Col>

              <Col className="m-0 p-0 mb-3 chat__container--item chat__receive" xs={12}>
                <div className="d-inline-block border border-d4 rounded-3 chat__container--itemBody">
                  <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6 chat__container--text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>

                  <div className="pr-3 text-92 vv-font-size-1-4 text-right chat__container--time">10:16</div>
                </div>
              </Col>

              <Col className="m-0 p-0 mb-3 chat__container--item chat__send" xs={12}>
                <div className="d-inline-block border border-d4 rounded-3 chat__container--itemBody">
                  <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6 chat__container--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, qui.</div>

                  <div className="pr-3 text-92 vv-font-size-1-4 text-right chat__container--time">10:15</div>
                </div>
              </Col>

              <Col className="m-0 p-0 mb-3 chat__container--item chat__receive" xs={12}>
                <div className="d-inline-block border border-d4 rounded-3 chat__container--itemBody">
                  <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6 chat__container--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, autem culpa cupiditate facilis quasi qui reprehenderit sed sint sunt tempore?</div>

                  <div className="pr-3 text-92 vv-font-size-1-4 text-right chat__container--time">10:16</div>
                </div>
              </Col>

            </Row>
          </Col>
        </Row>

        <Row className="m-0 p-0 pt-3 w-100 storeFixedChatButtons">
          <Col className = "m-0 py-0 px-2" xs={12}>
            <div className = "chatStickyDefaultWord__container pb-3">
              <DefaultWordItem
                word = 'Hi' />

              <DefaultWordItem
                word = 'Lorem ipsum.' />

              <DefaultWordItem
                word = 'Lorem ipsum dolor.' />

              <DefaultWordItem
                word = 'Lorem ipsum dolor sit amet.' />

              <DefaultWordItem
                word = 'Lorem ipsum.' />
            </div>
          </Col>
          <Col className = "m-0 p-0" xs={12}>
            <Form className="w-100" onSubmit={e => { e.preventDefault() }}>
              <Row className="m-0 p-0 px-2 mb-3 align-items-center chatStickyButtons__container">
                <Col className = "m-0 p-0 chatStickyButtons__container--inputTex" xs={10}>
                  <Row className = "m-0 p-0 pr-2-rem shadow rounded-pill align-items-center bg-white chatStickyButtons__inputTex--container">
                    <Col className = "m-0 p-0 pl-5" xs={9}>
                      <FormControl
                        placeholder= { __('Type a massage') }
                        aria-label= { __('Type a massage') }
                        aria-describedby="searchTopPanelBtn"
                        className="border-0 chatStickyButtons__inputTex--text vv-font-size-1-5 bg-transparent text-bc shadow-none p-0 m-0 w-100"
                      />
                    </Col>
                    <Col className = "m-0 p-0 text-right" xs={3}>
                      <i className = "fal fa-paperclip text-d4 vv-font-size-3 mr-4" />
                      <i className = "fas fa-camera text-d4 vv-font-size-3" />
                    </Col>
                  </Row>
                </Col>
                <Col className = "m-0 p-0 chatStickyButtons__container--submit" xs={2}>
                  <div className="bg-primary rounded-circle float-right">
                    <Row className = "m-0 p-0 h-100 align-items-center">
                      <Col className = "m-0 p-0 text-center">
                        <i className = "far fa-location-arrow display-4 text-white mr-2" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Chat;