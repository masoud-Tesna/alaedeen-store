// import style file:
import './styles/Chat.less';

// import ant design components used:
import { Button, Col, Row, Input, Form, Skeleton, Result } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetStoreState } from "../contexts/store/StoreContext";
import { useQuery } from "react-query";

// import Moment for show date:
import Moment from 'react-moment';
import { useGetAuthState } from "../contexts/user/UserContext";
import PopUpSignIn from "../layouts/blocks/static_templates/PopUpSignIn";
import { fn_random_number_between } from "../functions/Helper";


const Chat = () => {

  //initial state and dispatch for auth context:
  const { user_data } = useGetAuthState();

  const { id: storeId } = useGetStoreState();

  const [messageText, setMessageText] = useState("");
  const [scrollDown, setScrollDown] = useState(0);

  const [form] = Form.useForm();

  async function getMessagesApi() {
    const url = `https://alaedeen.com/horn/store-get-messages-api/?user_id=${user_data.auth.user_id}&store_id=${storeId}`;
    const { data } = await axios.get(url);
    return data;
  }


  const { isLoading, isSuccess, data: messages, refetch } = useQuery('getMessageApi', getMessagesApi, {
    enabled: !!user_data.auth.user_id,
    refetchInterval: 10000
  });

  const DefaultWord = ({ word }) => {
    const sendDefaultWord = () => {
      const values = {
        sender_id: user_data.auth.user_id,
        receiver_id: storeId,
        message: word,
        type: "text",
      };
      sendMessagePost({ values });
    }

    return <div className = "border border-primary rounded-pill text-primary vv-font-size-1-6 font-weight-500 chat--defaultWords--item" onClick={() => { sendDefaultWord() }}>{ word }</div>
  }

  const sendMessage = (values) => {
    values.sender_id = user_data.auth.user_id;
    values.receiver_id = storeId;
    values.type = "text";
    sendMessagePost({ values });
  };

  const sendMessagePost = ({ values }) => {
    axios.post(`https://alaedeen.com/horn/store-send-message-api`, { values })
      .then(() => {
        form.resetFields();
        refetch()
          .then(() => {
            setScrollDown(prevState => prevState + 1);
          });
      });
  }

  useEffect(() => {
    //Scroll To Bottom message
    if (user_data.auth.length !== 0) {
      const messageContent = document.querySelector(".chat--topSection");
      messageContent.scrollTop = messageContent.scrollHeight;
    }
  }, [isSuccess, scrollDown, user_data]);

  if (user_data.auth.length === 0) {
    return (
      <Row className="chat--container mt-4" justify={"center"}>
        <Col xs={24} md={12}>
          <Row>
            <Col span={24} className="chat--topSection show--skeleton">
              <Row>
                <Col className = "text-center text-bc vv-font-size-1-6" span={24}>
                  <Skeleton.Input style={{ width: 240, height: 20 }} active={true} size={"default"} />
                </Col>

                <Col span={24} className="mt-2-5-rem chat--topSection__messages">
                  <Row gutter={[0, 16]}>
                    <Col className="text-center vv-font-size-1-6 text-92" span={24}>
                      <Skeleton.Input style={{ width: 80, height: 20 }} active={true} size={"default"} />
                    </Col>

                    <Col className="chat--message chat--send" span={24}>
                      <div className="d-inline-block border border-d4 rounded-3 chat--message__body" style={{ width: `${fn_random_number_between(14, 25)}rem` }}>
                        <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6">
                          <Skeleton paragraph={{ rows: 2 }} />
                        </div>

                        <div className="pr-3 text-92 vv-font-size-1-4 text-right">
                          <Skeleton.Input style={{ width: 35, height: 18 }} active={true} size={"default"} />
                        </div>
                      </div>
                    </Col>

                    <Col className="chat--message chat--send" span={24}>
                      <div className="d-inline-block border border-d4 rounded-3 chat--message__body" style={{ width: `${fn_random_number_between(14, 25)}rem` }}>
                        <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6">
                          <Skeleton paragraph={{ rows: 1 }} />
                        </div>

                        <div className="pr-3 text-92 vv-font-size-1-4 text-right">
                          <Skeleton.Input style={{ width: 35, height: 18 }} active={true} size={"default"} />
                        </div>
                      </div>
                    </Col>

                    <Col className="chat--message chat--receive" span={24}>
                      <div className="d-inline-block border border-d4 rounded-3 chat--message__body" style={{ width: `${fn_random_number_between(14, 25)}rem` }}>
                        <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6">
                          <Skeleton paragraph={{ rows: 2 }} />
                        </div>

                        <div className="pr-3 text-92 vv-font-size-1-4 text-right">
                          <Skeleton.Input style={{ width: 35, height: 18 }} active={true} size={"default"} />
                        </div>
                      </div>
                    </Col>

                    <Col className="chat--message chat--receive" span={24}>
                      <div className="d-inline-block border border-d4 rounded-3 chat--message__body" style={{ width: `${fn_random_number_between(14, 25)}rem` }}>
                        <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6">
                          <Skeleton paragraph={{ rows: 1 }} />
                        </div>

                        <div className="pr-3 text-92 vv-font-size-1-4 text-right">
                          <Skeleton.Input style={{ width: 35, height: 18 }} active={true} size={"default"} />
                        </div>
                      </div>
                    </Col>

                    <Col className="chat--message chat--receive" span={24}>
                      <div className="d-inline-block border border-d4 rounded-3 chat--message__body" style={{ width: `${fn_random_number_between(14, 25)}rem` }}>
                        <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6">
                          <Skeleton paragraph={{ rows: 3 }} />
                        </div>

                        <div className="pr-3 text-92 vv-font-size-1-4 text-right">
                          <Skeleton.Input style={{ width: 35, height: 18 }} active={true} size={"default"} />
                        </div>
                      </div>
                    </Col>

                    <Col className="chat--message chat--send" span={24}>
                      <div className="d-inline-block border border-d4 rounded-3 chat--message__body" style={{ width: `${fn_random_number_between(14, 25)}rem` }}>
                        <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6">
                          <Skeleton paragraph={{ rows: 1 }} />
                        </div>

                        <div className="pr-3 text-92 vv-font-size-1-4 text-right">
                          <Skeleton.Input style={{ width: 35, height: 18 }} active={true} size={"default"} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col span={24} className="chat--bottomSection__skeletons">
              <Row gutter={[0, 20]}>
                <Col span={24} className="px-2">
                  <Row className="defaultWordSkeleton" justify={"space-around"}>
                    <Col span={9}>
                      <Skeleton.Input active={true} size={"default"} />
                    </Col>

                    <Col span={8}>
                      <Skeleton.Input active={true} size={"default"} />
                    </Col>

                    <Col span={4}>
                      <Skeleton.Input active={true} size={"default"} />
                    </Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row className="px-2 mb-3 chat--sendMessage__container">
                    <Col flex='1 1' className="chat--sendMessage__inputText">
                      <Skeleton.Input style={{ width: "100%" }} active={true} size={"default"} />
                    </Col>
                    <Skeleton.Button active={true} size={"default"} shape={"circle"} />
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col span={24} className={ `storeLoad--LoadingModal for--signIn` }>
              <Result
                className="storeLoad--LoadingModal__loading"
                icon={<></>}
                title= {<PopUpSignIn />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }


  return (
    <Row className="chat--container mt-4" justify={"center"}>
      <Col xs={24} md={12}>
        <Row>
          <Col span={24} className="chat--topSection">
            {!user_data.auth.user_id ?
              <PopUpSignIn /> :
              <Row>
                <Col className = "text-center text-bc vv-font-size-1-6" span={24}>Probability of response in minutes</Col>

                {/*<Col className="mt-4 chat--topSection__productContainer" span={24}>
                  <Row>
                    <Col className = "px-3 py-4 rounded-10 shadow-line bg-white" xs={24}>
                      <Row>
                        <Col xs={24}>
                          <Row justify={"space-between"} className="px-2 border-bottom border-bc">
                            <Col className="vv-font-size-1-6 text-70 font-weight-500">Product</Col>

                            <Col className="vv-font-size-1-6 text-70 font-weight-500">ID:2548794</Col>
                          </Row>
                        </Col>
                        <Col className="px-2 mt-2" xs={24}>
                          <Row gutter={15}>
                            <Col>
                              <div className="shadow rounded-top-5 chat--productContainer__productImg">
                                <img
                                  className = "w-100"
                                  src = "http://store.nilper.ir/image/cache/catalog/Product picture/Office Chair/850br-200x200.jpg"
                                  alt = "Office Chair"
                                />
                              </div>
                            </Col>
                            <Col xs={16}>
                              <div className="pt-2-rem vv-font-size-1-6 text-47">chair</div>

                              <div className="pt-2-rem vv-font-size-1-6 text-70">US $ 50-55 / Per</div>

                              <div className="pt-2-rem chat--productContainer__btn">
                                <Button className="bg-primary text-white rounded-3">
                                  Send Product
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>*/}

                <Col span={24} className="mt-2-5-rem chat--topSection__messages">
                  <Row gutter={[0, 16]}>
                    <Col className="text-center vv-font-size-1-6 text-92" span={24}>04/02/2021</Col>

                    {isLoading ? 'Loading...' :
                      <>
                        {messages.map(message => {
                          return (
                            <Col key={message.message_id} className={ `chat--message ${ message.receiver_id == storeId ? 'chat--send' : ' chat--receive' }` } span={24}>
                              <div className="d-inline-block border border-d4 rounded-3 chat--message__body">
                                <div className="pl-4 pr-3 mt-3 text-33 vv-font-size-1-6">{ message.message }</div>

                                <div className="pr-3 text-92 vv-font-size-1-4 text-right">
                                  <Moment format="HH:mm" unix>{message.timestamp}</Moment>
                                </div>
                              </div>
                            </Col>
                          );
                        })}
                      </>
                    }
                  </Row>
                </Col>
              </Row>
            }
          </Col>

          <Col span={24} className="chat--bottomSection">
            <Row>
              <Col span={24} className="px-2">
                <div className = "chat--bottomSection__defaultWords py-3">
                  <DefaultWord
                    word = 'Hi' />

                  <DefaultWord
                    word = 'Lorem ipsum.' />

                  <DefaultWord
                    word = 'Lorem ipsum dolor.' />

                  <DefaultWord
                    word = 'Lorem ipsum dolor sit amet.' />

                  <DefaultWord
                    word = 'Lorem ipsum.' />
                </div>
              </Col>

              <Col span={24}>
                <Form
                  form={form}
                  className="h-100 oneRequest--formContent"
                  name="request-form"
                  onFinish={sendMessage}
                >
                  <Row className="px-2 mb-3 chat--sendMessage__container">
                    <Col flex='1 1' className="chat--sendMessage__inputText">
                      <Row className="pr-2-rem h-100 shadow rounded-pill bg-white chat--inputText__container">
                        <Col span={18} className="pl-5">
                          <Form.Item name="message" className="m-0">
                            <Input.TextArea
                              placeholder={ 'Type a massage' }
                              autoSize={{ minRows: 1, maxRows: 2 }}
                              bordered={false}
                              onChange={e => setMessageText(e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col span={6} className="text-right">
                          <i className = "fal fa-paperclip text-d4 vv-font-size-3 mr-4" />
                          <i className = "fas fa-camera text-d4 vv-font-size-3" />
                        </Col>
                      </Row>
                    </Col>
                    <Col flex='55px' className="chat--sendMessage__submit text-right">
                      <Button type="primary" shape="circle" icon={ <i className="far fa-location-arrow display-4 text-white mr-2 mt-1" /> } htmlType="submit" disabled={!messageText && true} />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { Chat };
