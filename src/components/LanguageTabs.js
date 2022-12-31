import React, {useState} from 'react';
import {Row, Tab, Col, Nav, Form} from 'react-bootstrap';

/* eslint-disable max-len */
const LanguageTabs = () => {
  const [TAB, setTab] = useState({
    indonesia: {
      feeTypeName: '',
      description: '',
    },
    chinese: {
      feeTypeName: '',
      description: '',
    },
  });

  return (
    <Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="pr-0">
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" className="flex gap-1">
                  Indonesia
                  {TAB.indonesia.feeTypeName === '' || TAB.indonesia.description === '' ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4">
                      <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" fill="#D91C1C" />
                    </svg> : ''
                  }
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="second" className="flex gap-1">
                  Chinese Simplified
                  {TAB.chinese.feeTypeName === '' || TAB.chinese.description === '' ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4">
                      <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" fill="#D91C1C" />
                    </svg> : ''
                  }
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className="border border-[#E1E1E1] p-4">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Form>
                  <Row>
                    <Col>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">Fee Type Name<span className="text-[#FF0000]">*</span></Form.Label>

                        <Col sm="8">
                          <Form.Control
                            maxLength="256"
                            required
                            value={TAB.indonesia.feeTypeName}
                            onChange={(e) => setTab({
                              ...TAB,
                              indonesia: {
                                ...TAB.indonesia,
                                feeTypeName: e.target.value,
                              },
                            })}
                          />

                          <Form.Control.Feedback type="invalid">
                            Fee Type Name is required
                          </Form.Control.Feedback>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="4">Description</Form.Label>
                        <Col sm="8">
                          <Form.Control
                            as="textarea"
                            maxLength="4000"
                            rows={6}
                            value={TAB.indonesia.description}
                            onChange={(e) => setTab({
                              ...TAB,
                              indonesia: {
                                ...TAB.indonesia,
                                description: e.target.value,
                              },
                            })}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Form>
                  <Row>
                    <Col>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">Fee Type Name<span className="text-[#FF0000]">*</span></Form.Label>

                        <Col sm="8">
                          <Form.Control
                            maxLength="256"
                            required
                            value={TAB.chinese.feeTypeName}
                            onChange={(e) => setTab({
                              ...TAB,
                              chinese: {
                                ...TAB.chinese,
                                feeTypeName: e.target.value,
                              },
                            })}
                          />

                          <Form.Control.Feedback type="invalid">
                            Fee Type Name is required
                          </Form.Control.Feedback>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="4">Description</Form.Label>
                        <Col sm="8">
                          <Form.Control
                            as="textarea"
                            maxLength="4000"
                            rows={6}
                            value={TAB.chinese.description}
                            onChange={(e) => setTab({
                              ...TAB,
                              chinese: {
                                ...TAB.chinese,
                                description: e.target.value,
                              },
                            })}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Row>
  );
};

export default LanguageTabs;
