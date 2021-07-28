import { useHistory } from "react-router-dom";

// import Styles For TopPanelWhitBackIcon:
import './styles.less';

// Ant Design Import:
import { Row, Col } from 'antd';

// import store context
import { useGetStoreState } from "../../../contexts/store/StoreContext";

// import translate functions used:
import { useTranslation } from "react-i18next";
import { __ } from "../../../functions/Helper";
import { useEffect, useState } from "react";


const TopPanelWhitBackIcon = () => {
  const { name: storeName } = useGetStoreState();

  const { t } = useTranslation();

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const [scrolled, setScrolled] = useState(false);

  const [widthPage, setWidthPage] = useState(window.innerWidth);

  let x= [];

  const handleScroll = () => {
    const offsetY = window.scrollY;
    if (widthPage >= 768) {
      setScrolled(false);
    } // if WidthPage state value <= 576 change condition for scroll and set class name
    else if (widthPage >= 577) {
      if(offsetY > 42 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } // if WidthPage state value >= 577 change condition for scroll and set class name
    else if (widthPage <= 576) {
      if(offsetY > 124 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } // if WidthPage state value <= 576 change condition for scroll and set class name
  }

  //FIX ME:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); //if Scroll Page Run handleScroll function
    window.addEventListener('load', handleScroll); //if Load Page in bottom page...

    window.addEventListener('load', () => { setWidthPage(window.innerWidth);}); //if Load Page Update widthPage State Value
    window.addEventListener('resize', () => { setWidthPage(window.innerWidth);}); //if Resize Page Update widthPage State Value
  }, []);

  if(scrolled){
    x.push('scrolled');
  }

  return (
    <Row className={ `bg-top-panel topPanel--container TopPanelWhitBackIcon ${x.join(" ")}` }>
      <Col span={24} className="topPanel--col">
        <Row className="h-100" gutter={24}>
          <Col className="d-lg-none my-auto vv-cursor-pointer topPanel--col__logoXS" onClick={() => { goBack() }}>
            <i className="fa fa-chevron-left text-white display-5" />
          </Col>
          <Col className="d-lg-none my-auto text-white vv-font-size-1-8 font-weight-bold topPanel--col__titleXS">
            { t(__(storeName)) }
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TopPanelWhitBackIcon;