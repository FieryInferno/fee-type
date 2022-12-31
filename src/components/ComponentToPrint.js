/* eslint-disable max-len */
import React, {useState} from 'react';
import {Table} from 'react-bootstrap';

const FEE_TYPE = JSON.parse(localStorage.getItem('feeType'));
const STATUS = {
  '1': 'Active',
  '3': 'Inactive',
};

// eslint-disable-next-line react/display-name
export const ComponentToPrint = React.forwardRef((props, ref) => {
  const [feeType] = useState(FEE_TYPE || [
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

  return (
    <Table striped bordered hover size="sm" className="rounded" ref={ref}>
      <thead className="bg-[#5E5E5E] text-white">
        <tr>
          <th>Fee Type Code</th>
          <th>Fee Type Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {feeType.map(({feeTypeCode, feeTypeName, description, status}, key) => {
          return status !== '0' &&
            <tr key={key}>
              <td>{feeTypeCode}</td>
              <td>{feeTypeName}</td>
              <td>{description}</td>
              <td>{STATUS[status]}</td>
            </tr>;
        })}
      </tbody>
    </Table>
  );
});
