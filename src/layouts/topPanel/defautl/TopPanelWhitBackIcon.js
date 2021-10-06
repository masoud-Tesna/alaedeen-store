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

const TopPanelWhitBackIcon = ({ scrolledClass, pathName }) => {

  const { name: storeName } = useGetStoreState();

  const { t } = useTranslation();

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <Row className={ `bg-top-panel topPanel--container TopPanelWhitBackIcon ${scrolledClass}` }>
      <Col span={24} className="topPanel--col">
        <Row className="h-100" gutter={24}>
          <Col className="my-auto vv-cursor-pointer topPanel--col__logoXS" onClick={() => { goBack() }}>
            <i className="fa fa-chevron-left text-white display-5" />
          </Col>

          {/*if factories page show tag:*/}
          { pathName === 'chat' &&
            <Col className="my-auto text-white vv-font-size-1-8 font-weight-bold topPanel--col__titleXS">
            { t(__(storeName)) }
          </Col>
          }

          {/*if factories page show tag:*/}
          { pathName === 'all-categories' &&
            <Col className="my-auto text-white vv-font-size-1-8 font-weight-bold topPanel--col__titleXS">
              { t(__('all categories')) }
          </Col>
          }

        </Row>
      </Col>
    </Row>
  );
};

export default TopPanelWhitBackIcon;