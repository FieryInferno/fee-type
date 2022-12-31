import React, {useEffect, useState} from 'react';
import {Table, Form} from 'react-bootstrap';
import FilterComponent from '../components/FilterComponent';
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import {useNavigate} from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import {FEE_TYPE} from '../constants';
import Tooltip from '../components/Tooltip';

const STATUS = {
  '1': 'Active',
  '3': 'Inactive',
};

const FeeType = () => {
  const [checkField, setCheckField] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line new-cap
    setTimeout(() => $('#table').DataTable({
      searching: false,
      retrieve: true,
      columnDefs: [
        {
          width: '5%',
          targets: 0,
        },
      ],
    }), 1000);
  }, []);

  /* eslint-disable max-len */
  const [feeType, setFeeType] = useState(FEE_TYPE || [
    {
      feeTypeCode: '1',
      feeTypeName: 'Service Fee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo pulvinar lorem a vulputate. Cras sit amet dapibus purus. Morbi luctus consequat lacus vitae egestas.',
      status: '1',
    },
    {
      feeTypeCode: '2',
      feeTypeName: 'Reeissue Fee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo pulvinar lorem a vulputate. Cras sit amet dapibus purus. Morbi luctus consequat lacus vitae egestas.',
      status: '1',
    },
    {
      feeTypeCode: '3',
      feeTypeName: 'Cancellation Fee',
      description: 'Nunc porttitor aliquam lacus, ac gravida diam porttitor at. Duis non orci sapien. Nam molestie, justo eget feugiat volutpat, metus augue finibus massa, in laoreet magna dui semper est.',
      status: '1',
    },
    {
      feeTypeCode: '4',
      feeTypeName: 'Refund Fee',
      description: 'Praesent nec tortor erat. Praesent iaculis mattis risus, at euismod tellus iaculis eu. Donec lobortis aliquet sollicitudin. Nam condimentum vitae arcu vel lobortis.',
      status: '1',
    },
    {
      feeTypeCode: '5',
      feeTypeName: 'MDR Fee',
      description: 'Ut quis enim in turpis mollis vehicula. In hac habitasse platea dictumst. Proin elementum sit amet ex id sollicitudin. Nulla congue mattis vestibulum.',
      status: '3',
    },
  ]);

  const [feeTypeFilter, setFeeTypeFilter] = useState(feeType);

  useEffect(() => {
    setFeeTypeFilter(feeType);
    localStorage.setItem('feeType', JSON.stringify(feeType));
  }, [feeType]);

  return (
    <div>
      <Breadcrumb list={[
        {title: 'Master Data Management'},
        {title: 'Fee Type'},
      ]} />

      <FilterComponent
        feeType={feeType}
        setFeeType={setFeeType}
        setFeeTypeFilter={setFeeTypeFilter}
        checkField={checkField}
        setCheckField={setCheckField}
      />

      <Table striped bordered hover size="sm" id="table" className="rounded">
        <thead className="bg-[#5E5E5E] text-white">
          <tr>
            <th>
              <Form.Check type="checkbox" onChange={(e) => setCheckField(e.target.checked ? feeType : [])} />
            </th>
            <th>Fee Type Code</th>
            <th>Fee Type Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feeTypeFilter.map(({feeTypeCode, feeTypeName, description, status}, key) => {
            return status !== '0' &&
              <tr key={key}>
                <td>
                  <Form.Check type="checkbox" onChange={(e) => {
                    if (e.target.checked) checkField.push(feeTypeFilter[key]);
                    else checkField.splice(key, 1);

                    setCheckField([...checkField]);
                  }} checked={checkField.findIndex((field) => field.feeTypeCode === feeTypeCode) >= 0}/>
                </td>
                <td>{feeTypeCode}</td>
                <td>{feeTypeName}</td>
                <td>{description}</td>
                <td>{STATUS[status]}</td>
                <td className="flex gap-x-1">
                  <Tooltip tooltip="Click to edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-[1.2rem] cursor-pointer"
                      onClick={(e) => navigate(`/fee-type/${feeTypeCode}/edit`)}
                    >
                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" fill="#3E40AE" />
                    </svg>
                  </Tooltip>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[1.2rem]">
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" fill="#3E40AE" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-[1.2rem] cursor-pointer"
                    onClick={(e) => {
                      feeType.splice(key, 1);
                      setFeeType([...feeType]);
                    }}
                  >
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" fill="#3E40AE" />
                  </svg>
                </td>
              </tr>;
          })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default FeeType;
