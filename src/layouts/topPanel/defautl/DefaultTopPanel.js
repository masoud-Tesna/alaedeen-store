import { useState } from "react";

import { Link } from "react-router-dom";

// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col, Divider, Space, Menu, Skeleton, Dropdown, Button } from 'antd';

// import categories drop down:
import { CategoriesDropDownVertical as Categories } from "../../blocks/categories/CategoriesDropDownVertical";

// import logo:
import logoXl from '../../../assets/images/alaedeenLogo-Xl.png';

// import another components used:
import LoaderSpinner from '../../blocks/static_templates/LoadSpinner';

// import language context:
import { changeLanguageAction, useGetLanguageState, useDispatchLanguageState } from '../../../contexts/language/LanguageContext';

// import Custom hooks:
import { useWindowSize } from "../../../functions";

// import helper functions:
import { __ } from "../../../functions/Helper";

import { useTranslation } from "react-i18next";
import { logout, useDispatchAuthState, useGetAuthState } from "../../../contexts/user/UserContext";
import { DownOutlined } from "@ant-design/icons";

const DefaultTopPanel = () => {

  const [dropDownIsActive, setDropDownIsActive] = useState(false);

  const { user_data } = useGetAuthState();

  const { AuthDispatch } = useDispatchAuthState();

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

  // function for handle sign out
  const handleLogOut = () => {
    AuthDispatch(logout(AuthDispatch));
  }

  const menu = (
    <Menu className="header--userMenu">
      <Menu.Item>
        <span className="font-weight-bold">
          {` ${user_data.auth.firstname} ${user_data.auth.lastname} `}
        </span>
      </Menu.Item>

      <Menu.Item>
        <a href="https://alaedeen.com/horn/profile-settings/">
          { t(__('profile settings')) }
        </a>
      </Menu.Item>

      <Menu.Item>
        <a href="https://alaedeen.com/horn/compare/">
          { t(__('Comparison')) }
        </a>
      </Menu.Item>

      <Menu.Item>
        <a href="https://alaedeen.com/horn/index.php?dispatch=vendor_communication.threads">
          { t(__('Messages')) }
        </a>
      </Menu.Item>

      <Menu.Item>
        <a href="https://alaedeen.com/horn/wishlist/">
          { t(__('Favorites')) }
        </a>
      </Menu.Item>

      <Menu.Item className="header--userMenu__signOut">
        <Button className="header--userMenu__signOutBtn w-100 bg-primary-darken" onClick={handleLogOut}>
          { t(__('sign out')) }
        </Button>
      </Menu.Item>
    </Menu>
  );


  return (
    <>
      {width >= 768 &&
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
                    <img src={logoXl} alt="Alaedeen"/>
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

              <Col className="topPanel--content__rightCenter topPanel--content__account my-auto text-right" span={6}>

                { user_data.load ?
                  <>
                    <Skeleton avatar paragraph={{ rows: 1 }} />
                  </> :
                  <>
                    { user_data.auth.user_id ?
                      <>
                        <Dropdown overlay={menu} trigger={['click']} openClassName="content--account__DropDownIsOpen" onVisibleChange={visible => setDropDownIsActive(visible)} >

                          <Row className="w-100" align="middle" gutter={12} justify="end" onClick={e => e.preventDefault()}>
                            <Col>
                              { user_data.auth.company_logo ?
                                <span className="content--account__companyLogo">
                                  <img src={user_data.auth.company_logo.logo_path} alt=""/>
                                </span> :
                                <i className="fal fa-user display-4 text-white d-block" />
                              }
                            </Col>

                            <Col>
                              <span className="font-weight-600 content--account__companyName">
                                {user_data.auth.company ?
                                  <>{ user_data.auth.company }</> :
                                  <>{ ` ${user_data.auth.firstname} ${user_data.auth.lastname} ` }</>
                                }
                              </span>
                              <DownOutlined rotate={ dropDownIsActive ? 180 : 0} />
                            </Col>
                          </Row>

                        </Dropdown>
                      </> :
                      <>
                        <Space size={"small"}>
                          <i className="fal fa-user display-5 text-white d-block mr-3" />
                          <span>
                    <a className="text-white vv-font-size-2" href={"https://alaedeen.com/sign-in"} >
                      {t(__('Sign in'))}
                    </a>
                  </span>
                          <Divider type="vertical" className="border-70"/>
                          <span>
                    <a className="text-white vv-font-size-2" href="https://alaedeen.com/horn/register/">
                      {t(__('Join Free'))}
                    </a>
                  </span>
                        </Space>
                      </>
                    }

                  </>
                }


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