import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Container, Row }                    from "react-bootstrap";

import TopPanel from './layouts/TopPanel';

//Pages Route
import Home          from "./page/home";
import Products      from "./page/products";
import About         from "./page/about";
import AllCategories from "./page/allCategories";
import SendInquiry   from "./page/send-inquiry";
import Chat          from "./page/chat";

import StickyButtons from "./layouts/blocks/StickyButtons";

import { useRecoilValue } from "recoil";
import { CheckLanguage }  from "./recoil-atoms/Atoms";

const StoreRoute = () => {

  const lang = useRecoilValue(CheckLanguage)
  document.documentElement.lang = lang;

  return (
    <>
      <Router>
        <Container fluid>
          <Row>
            <Col className="m-0 p-0 storePanel" xs={12}>
              <TopPanel />
            </Col>

            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/products" isAuthed={true} render={(props) => (
                <Products {...props} lang={lang} />
              )} />

              <Route path="/all-categories" component={AllCategories} />

              <Route path="/send-inquiry" component={SendInquiry} />

              <Route path="/chat" component={Chat} />

              <Route path="/about">
                <About />
              </Route>

            </Switch>

            <Col className="m-0 p-0 storeFixedButtons" xs={12}>
              <StickyButtons />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default StoreRoute;