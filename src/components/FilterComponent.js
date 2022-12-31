import React, {useCallback, useState, useRef} from 'react';
import {Form, Button, Dropdown} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {useReactToPrint} from 'react-to-print';
import {CSVLink} from 'react-csv';
import AdvanceOptions from './AdvanceOptions';
import {ComponentToPrint} from './ComponentToPrint';
import TooltipComponent from './Tooltip';

const FilterComponent = ({
  feeType, checkField, setFeeType, setFeeTypeFilter, setCheckField,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeStatus = useCallback((status) => {
    checkField.map((field) => {
      const INDEX = feeType.findIndex((fee) => {
        return fee.feeTypeCode === field.feeTypeCode;
      });

      if (INDEX >= 0) {
        feeType[INDEX].status = status;
        setFeeType([...feeType]);
      }
    });
  }, [feeType, checkField]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  /* eslint-disable max-len */
  return (
    <>
      <div className="flex justify-between mt-8">
        <div className="flex justify-start">
          <div className="relative">
            <div className="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
              </svg>
            </div>
            <Form.Control
              type="text"
              placeholder="Search"
              onInput={(e) => {
                const RESULT = feeType.filter((fee) => {
                  for (const key in fee) {
                    if (Object.hasOwnProperty.call(fee, key)) {
                      const element = fee[key];

                      if (element.toLowerCase().includes(e.target.value.toLowerCase())) {
                        return fee;
                        break;
                      }
                    }
                  }
                });

                setFeeTypeFilter(RESULT);
              }}
              maxLength="256"
            />
          </div>
          <div className="ml-5 flex flex-nowrap items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <strong>
              Advance Options
            </strong>
            <svg className="w-3 h-3 ml-1 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>
            </svg>
          </div>
        </div>
        <div className="flex items-center">
          <TooltipComponent tooltip="Click to download">
            <div className="bg-[#5E5E5E] rounded-full p-1 h-fit cursor-pointer mr-5">
              <CSVLink data={feeType}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5">
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" fill="#fff" stroke="#fff"/>
                </svg>
              </CSVLink>
            </div>
          </TooltipComponent>

          <TooltipComponent tooltip="Click to print">
            <div className="bg-[#5E5E5E] rounded-full p-1 h-fit cursor-pointer mr-5" onClick={handlePrint}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5">
                <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zm-16-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" fill="#fff" stroke="#fff"/>
              </svg>
            </div>
          </TooltipComponent>

          <div style={{display: 'none'}}>
            <ComponentToPrint ref={componentRef} />
          </div>

          <TooltipComponent tooltip="Click to create">
            <Button variant="primary">Create New</Button>
          </TooltipComponent>
        </div>
      </div>

      <AdvanceOptions isOpen={isOpen} setFeeType={setFeeType} feeType={feeType} />

      <div className="flex gap-4 mb-2">
        {checkField.length > 0 &&
          <>
            <Dropdown>
              <Dropdown.Toggle variant="secondary">UPDATE STATUS</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeStatus('1')}>Active</Dropdown.Item>
                <Dropdown.Item onClick={() => changeStatus('3')}>Inactive</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="secondary" onClick={() => {
              checkField.map((field) => {
                const INDEX = feeType.findIndex((fee) => {
                  return fee.feeTypeCode === field.feeTypeCode;
                });

                if (INDEX >= 0) {
                  feeType[INDEX].status = '0';
                  setFeeType([...feeType]);
                }
              });
            }}>REMOVE FEE TYPE</Button>
          </>
        }
      </div>
    </>
  );
};

FilterComponent.propTypes = {
  feeType: PropTypes.array,
  setFeeTypeFilter: PropTypes.func,
  setFeeType: PropTypes.func,
  checkField: PropTypes.array,
  setCheckField: PropTypes.func,
};

export default React.memo(FilterComponent);
