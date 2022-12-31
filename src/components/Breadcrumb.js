import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

/* eslint-disable max-len */
const BreadcrumbComponent = ({list}) => {
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumb>
        {list.map(({title, url}, key) =>
          <Breadcrumb.Item key={key} active={key === list.length - 1} onClick={() => navigate(url)}>
            {title}
          </Breadcrumb.Item>,
        )}
      </Breadcrumb>

      <h1 className="font-bold text-2xl">{list[list.length - 1].title}</h1>
    </>
  );
};

BreadcrumbComponent.propTypes = {list: PropTypes.array};

export default BreadcrumbComponent;
