import { useState } from "react";

import { Link } from "react-router-dom";

// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col, Divider, Space, Menu, Skeleton, Dropdown, Button } from 'antd';

// import categories drop down:
import { CategoriesDropDownVertical as Categories } from "../../blocks/categories/CategoriesDropDownVertical";

// import alaedeen character:
import alaedeenChar from '../../../assets/images/alaedeen-char.svg';

// import another components used:
import LoaderSpinner from '../../blocks/static_templates/LoadSpinner';

// import language context:
import { useGetConfig, useConfigDispatch, changeLanguageAction } from "../../../contexts/config/ConfigContext";

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

  // get initial config:
  const { config } = useGetConfig();
  const { configDispatch } = useConfigDispatch();

  // initial state for show spinner:
  const [ showLoadSpinner, setShowLoadSpinner ] = useState(false);

  // function for change language:
  function handleChangeLanguage(e) {
    if (e.target.value !== config.language) {
      setShowLoadSpinner(true);

      configDispatch(changeLanguageAction(e.target.value));

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
          { showLoadSpinner &&
            <LoaderSpinner spinner={'default'} spinnerColor={'#2e8339'}/>
          }

          <Col span={24} className="topPanel--col">
            <Row className="h-100" gutter={24} justify="space-between">
              <Col className="topPanel--content__left my-auto">
                <Space size="small" align={"center"}>
                  <a href="https://alaedeen.com" className="d-block topPanel--col__logoXS">
                    <Row align="middle">
                      <Col flex="26px" className="logo--character">
                        <img src={alaedeenChar} alt=""/>
                      </Col>
                      <Col flex="1 1" className="pl-2">
                        <Row className="h-100">
                          <Col span={24} className="logo--alaedeenCom">
                            <i className="logo-icon-alaedeen-com" />
                          </Col>
                          <Col span={24} className="logo--alaedeenSlug">
                            <p className="m-0 text-white vv-font-size-1-1rem">{ t(__('Alaedeen Slug Section')) }</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </a>
                  <Categories language={config.language} userClass="categories--dropDown topPanel--content__item hover d-block dir-ltr" />
                  <Divider type="vertical" className="border-70"/>
                  <a className="topPanel--content__item hover text-white d-block" href="https://alaedeen.com/factories" >
                    <span className="topPanel--item__text d-block">
                      {t(__('Stores'))}
                    </span>
                  </a>
                </Space>
              </Col>

              <Col span={9}>
                <Row justify="left" className="h-100">
                  <Col span={12} className="topPanel--content__rightCenter topPanel--content__account my-auto text-right">

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
                                <a className="text-white vv-font-size-2" href="https://alaedeen.com/sign-in" >
                                  {t(__('Sign in'))}
                                </a>
                              </span>
                              <Divider type="vertical" className="border-70"/>
                              <span>
                                <a className="text-white vv-font-size-2" href="https://alaedeen.com/register">
                                  {t(__('Join Free'))}
                                </a>
                              </span>
                            </Space>
                          </>
                        }

                      </>
                    }


                  </Col>

                  <Col span={12} className="topPanel--content__right my-auto">
                    <Space size={3}>
                      <select value={config.language} onChange={(e) => {handleChangeLanguage(e)}} className="border-0 bg-transparent text-white vv-font-size-2 mr-3">
                        <option className="text-33" value="en">English</option>
                        <option className="text-33" value="fa">??????????</option>
                        <option className="text-33" value="ar">????????</option>
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
          </Col>

        </Row>
      }
    </>

  );
};

export default DefaultTopPanel;