import { useState } from "react";

import { Link } from "react-router-dom";

// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col, Divider, Space } from 'antd';

// import categories drop down:
import { CategoriesDropDownVertical as Categories } from "../../blocks/categories/CategoriesDropDownVertical";

// import images used:
import hornLogo from '../../../assets/images/logoXs.png';

// import another components used:
import LoaderSpinner from '../../blocks/static_templates/LoadSpinner';

// import language context:
import { changeLanguageAction, useGetLanguageState, useDispatchLanguageState } from '../../../contexts/language/LanguageContext';

// import Custom hooks:
import { useWindowSize } from "../../../functions";

// import helper functions:
import { __ } from "../../../functions/Helper";

import { useTranslation } from "react-i18next";

const DefaultTopPanel = () => {

  const { t } = useTranslation();

  // get screen width:
  const { width } = useWindowSize();

  // initial state for language:
  const { language } = useGetLanguageState();
  const { languageDispatch } = useDispatchLanguageState();

  // initial state for show spinner:
  const [ showLoadSpinner, setShowLoadSpinner ] = useState(false);

  // function for change language:
  function handleChangeLanguage(e) {
    if (e.target.value !== language) {
      setShowLoadSpinner(true);

      languageDispatch(changeLanguageAction(e.target.value));
      setTimeout(() => {
        setShowLoadSpinner(false);
      }, 1000);

    }
  }

  return (
    <>
      {width >= 992 &&
      /*if Screen Width >= 992px (Desktop): */
      <Row className="bg-top-panel topPanel--container">

        {/*Show Loading Spinner if Change language*/}
        <div className={ `${ showLoadSpinner ? 'd-block' : 'd-none' }` }>
          <LoaderSpinner spinner={'default'} spinnerColor={'#2e8339'}/>
        </div>

        <Col span={24} className="topPanel--col">
          <Row className="h-100" gutter={24} justify="space-between">
            <Col className="topPanel--content__left my-auto">
              <Space size="small" align={"center"}>
                <Link className="topPanel--col__logoXS" to={"/"} >
                  <img src={hornLogo} alt="Horn"/>
                </Link>
                <Categories userClass="categories--dropDown topPanel--content__item hover" />
                <Divider type="vertical" className="border-70"/>
                <Link className="topPanel--content__item hover" to={"/factories"} >
                <span className="topPanel--item__text">
                  {t(__('Stores'))}
                </span>
                </Link>
              </Space>
            </Col>

            <Col className="topPanel--content__rightCenter my-auto" offset={8}>
              <Space size={"small"}>
                <i className="fal fa-user display-5 text-white d-block mr-3" />
                <span>
                  <a className="text-white vv-font-size-2" href={"https://hornb2b.com/sign-in"} >
                    {t(__('Sign in'))}
                  </a>
                </span>
                <Divider type="vertical" className="border-70"/>
                <span>
                  <a className="text-white vv-font-size-2" href="https://hornb2b.com/horn/register/">
                    {t(__('Join Free'))}
                  </a>
                </span>
              </Space>
            </Col>

            <Col className="topPanel--content__right my-auto">
              <Space size={3}>
                <select value={language} onChange={(e) => {handleChangeLanguage(e)}} className="border-0 bg-transparent text-white vv-font-size-2 mr-3">
                  <option value="en">English</option>
                  <option value="fa">فارسی</option>
                  <option value="ar">عربی</option>
                </select>

                <Link className="topPanel--content__item home-icon" to={"/"} >
                <span className="topPanel--item__text">
                  <i className="fal fa-home text-white display-6" />
                </span>
                </Link>

                <Link className="topPanel--content__item question-icon" to={"/faq"} >
                <span className="topPanel--item__text">
                  <i className="fal fa-question-circle text-white display-6" />
                </span>
                </Link>

              </Space>
            </Col>
          </Row>
        </Col>

      </Row>
      }
    </>

  );
};

export default DefaultTopPanel;