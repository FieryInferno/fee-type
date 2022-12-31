import React, {useMemo, useState} from 'react';
import BreadcrumbComponent from '../components/Breadcrumb';
import {Card, Form, Col, Row, Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {FEE_TYPE} from '../constants';
import LanguageTabs from '../components/LanguageTabs';

const FeeTypeForm = () => {
  const {feeTypeCode} = useParams();
  const [EXIST, setExist] = useState({
    feeTypeCode: false,
    feeTypeName: false,
  });

  const [feeType, FEE_TYPE_FILTER] = useMemo(() => {
    const INDEX = FEE_TYPE.findIndex((fee) => fee.feeTypeCode === feeTypeCode);
    const FEE_TYPE_FILTER = FEE_TYPE.filter((fee) => {
      if (fee.feeTypeCode !== feeTypeCode && fee.status !== '0') return true;
    });

    return [FEE_TYPE[INDEX], FEE_TYPE_FILTER];
  }, [FEE_TYPE]);

  const [VALUES, setValues] = useState(feeType);

  const DISABLED = useMemo(() => {
    return EXIST.feeTypeCode ||
      EXIST.feeTypeName ||
      !VALUES.feeTypeCode ||
      !VALUES.feeTypeName;
  }, [EXIST, VALUES]);

  /* eslint-disable max-len */
  return (
    <>
      <BreadcrumbComponent list={[
        {title: 'Master Data Management'},
        {
          title: 'Fee Type',
          url: '/fee-type',
        },
        {title: 'Edit Fee Type'},
      ]} />

      <Card className="mt-10 border-[#D3D3D3]">
        <Card.Body className="bg-white rounded p-9">
          <Form>
            <Row>
              <Col>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="4">Fee Type Name<span className="text-[#FF0000]">*</span></Form.Label>

                  <Col sm="8">
                    <Form.Control
                      value={VALUES.feeTypeName}
                      maxLength="256"
                      required
                      onChange={(e) => {
                        const INDEX = FEE_TYPE_FILTER.findIndex((fee) => fee.feeTypeName === e.target.value);

                        setExist({
                          ...EXIST,
                          feeTypeName: INDEX >= 0,
                        });

                        setValues({
                          ...VALUES,
                          feeTypeName: e.target.value,
                        });
                      }}
                    />

                    <Form.Control.Feedback type="invalid">
                      Fee Type Name is required
                    </Form.Control.Feedback>

                    <Form.Control.Feedback type="invalid" className={EXIST.feeTypeName ? 'block' : 'hidden'}>
                      Fee Type Code already exist
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="4">Description</Form.Label>

                  <Col sm="8">
                    <Form.Control
                      as="textarea"
                      value={VALUES.description}
                      maxLength="4000"
                      rows={6}
                      onChange={(e) => setValues({
                        ...VALUES,
                        description: e.target.value,
                      })}
                    />
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <div className="bg-[#F3F4F4] mx-10 p-[33px] h-[125px]">
                  <h2 className="font-semibold">For Interface Purpose</h2>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="6">Fee Type Code<span className="text-[#FF0000]">*</span></Form.Label>

                    <Col sm="6">
                      <Form.Control
                        value={VALUES.feeTypeCode}
                        maxLength="36"
                        required
                        onChange={(e) => {
                          const INDEX = FEE_TYPE_FILTER.findIndex((fee) => fee.feeTypeCode === e.target.value);

                          setExist({
                            ...EXIST,
                            feeTypeCode: INDEX >= 0,
                          });

                          setValues({
                            ...VALUES,
                            feeTypeCode: e.target.value,
                          });
                        }}
                      />

                      <Form.Control.Feedback type="invalid">
                        Fee Type Code is required
                      </Form.Control.Feedback>

                      <Form.Control.Feedback type="invalid" className={EXIST.feeTypeCode ? 'block' : 'hidden'}>
                        Fee Type Code already exist
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                </div>
              </Col>
            </Row>

            <LanguageTabs />
          </Form>
        </Card.Body>
      </Card>

      <div className="flex gap-4 mt-2">
        <Button variant="secondary" className="px-4" disabled={DISABLED}>SAVE</Button>
      </div>
    </>
  );
};

export default FeeTypeForm;
