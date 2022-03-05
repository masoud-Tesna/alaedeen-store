import { useState } from "react";

// import style file:
import './styles/PopUpSignIn.less';

// import Design:
import { Button, Col, Form, Input, Row } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from "@ant-design/icons";

import { __ } from "../../../functions/Helper";
import { useTranslation } from "react-i18next";

// import google pic:
import googlePic from '../../../assets/images/google.png';

// import language context:
import { useGetConfig } from "../../../contexts/config/ConfigContext";

import { signInAction, useDispatchAuthState, useGetAuthState, checkSignInLoadingAction } from "../../../contexts/user/UserContext";
import { signInLoadingFalseAction } from "../../../contexts/user/UserActionCreators";

import { useMutation } from "react-query";
import { signInApi } from "../../../functions";

const PopUpSignIn = () => {

  // get initial config:
  const { config } = useGetConfig();

  const { t } = useTranslation();

  //initial state and dispatch for auth context:
  const { user_data } = useGetAuthState();
  const { AuthDispatch } = useDispatchAuthState();

  // initial State for Error Handle:
  const [signInIncorrect, setSignInIncorrect] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { mutate: signInMutate } = useMutation(signInApi, {
    onSuccess: res => {
      if (res === 'email_incorrect') {
        setSignInIncorrect('email_incorrect');
        AuthDispatch(signInLoadingFalseAction());
      }
      else if (res === 'password_incorrect') {
        setSignInIncorrect('password_incorrect');
        AuthDispatch(signInLoadingFalseAction());
      }
      else if (res?.auth?.status) {
        AuthDispatch(signInAction(res.auth, res.token));
      }
    }
  });

  const signInHandle = values => {

    AuthDispatch(checkSignInLoadingAction());

    const loginData = {
      user_login: values.user_login,
      password: values.password,
      language: config.language
    }

    signInMutate(loginData, {
    });

  }

  // handle sign in error:
  const formEmailItemValidateStatus = signInIncorrect === 'email_incorrect' && { validateStatus : 'error' };
  const formEmailItemValidateStatusMsg = signInIncorrect === 'email_incorrect' && { help : t(__('sign in email incorrect msg')) };

  const formPasswordItemValidateStatus = signInIncorrect === 'password_incorrect' && { validateStatus : 'error' };
  const formPasswordItemValidateStatusMsg = signInIncorrect === 'password_incorrect' && { help : t(__('sign in password incorrect msg')) };

  return (
    <Row justify={"center"} className="signIn--container h-100">
      <Col span={24} className="signIn--content bg-white p-5">
        <Form
          className="h-100 signIn--formContent"
          name="signIn-form"
          onFinish={signInHandle}
        >
          <Row gutter={{ xs: 0, lg: 32 }}>
            <Col xs={24} lg={12} className="mb-4 mb-lg-0 signIn--loginContent">
              <Row className="h-100" align="middle">
                <Col span={24}>
                  <Form.Item
                    {...formEmailItemValidateStatus}
                    {...formEmailItemValidateStatusMsg}
                    name="user_login"
                    className="signIn--formContent__userLogin"
                    rules={[
                      {
                        type: "email",
                        message: t(__("The input is not valid E-mail"))
                      },
                      {
                        required: true,
                        message: t(__("Please enter your account E-mail"))
                      }
                    ]}
                  >
                    <Input
                      placeholder={ t(__('E-mail address')) }
                      bordered={false}
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    {...formPasswordItemValidateStatus}
                    {...formPasswordItemValidateStatusMsg}
                    name="password"
                    className="signIn--formContent__password"
                    rules={[
                      {
                        required: true,
                        message: t(__("Please enter your account Password"))
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder={ t(__('password')) }
                      bordered={false}
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                  </Form.Item>
                </Col>

                {/*<Col span={24}>
                  <Row justify={"space-between"}>
                    <Col>
                      <Form.Item
                        className="signIn--rememberMe"
                        name="remember_me"
                        valuePropName="checked"
                      >
                        <Checkbox
                          value="yes"
                        >
                          { t(__('remember_me')) }
                        </Checkbox>
                      </Form.Item>
                    </Col>

                    <Col>
                      <Form.Item
                        className="signIn--forgotPassword"
                        name="remember_me"
                        valuePropName="checked"
                      >
                        <a href="https://alaedeen.com/horn/index.php?dispatch=auth.recover_password" className="text-92 vv-font-size-1-2">{ t(__('Forgot Password')) }</a>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>*/}

                <Col span={24}>
                  <Form.Item
                    className="signIn--signInBtn"
                    valuePropName="checked"
                  >
                    <Button className="bg-primary w-100 text-white border-0 p-0" htmlType="submit">
                      { t(__('Sign in')) }
                    </Button>
                  </Form.Item>
                </Col>

              </Row>
            </Col>

            <Col xs={24} lg={12} className="signIn--loginExtra">
              <Row className="h-100">
                <Col span={24} className="text-bc vv-font-size-1-4 signInWithGoogleTxt">
                  { t(__('Or Sign In with')) }
                </Col>

                <Col span={24} className="signInWithGoogleBtn">
                  <div className="shadow-circle rounded-circle mx-auto">
                    <img className="mx-auto" src={googlePic} alt={ t(__('sing_in_whit_google')) }/>
                  </div>
                </Col>

                <Col span={24} className="dontHaveAccountContainer">
                  <span className="text-92 vv-font-size-1-6">{ t(__('Don\'t have an account')) }</span>
                  <a href="https://alaedeen.com/register" className="text-primary-darken mx-2 vv-font-size-1-8 font-weight-600">{ t(__('Join Free')) }</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default PopUpSignIn;
