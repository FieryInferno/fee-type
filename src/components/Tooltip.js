import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import PropTypes from 'prop-types';

const TooltipComponent = ({children, tooltip}) => (
  <OverlayTrigger
    placement="top"
    overlay={
      <Tooltip id="tooltip-top">{tooltip}</Tooltip>
    }
  >
    {children}
  </OverlayTrigger>
);

TooltipComponent.propTypes = {
  children: PropTypes.any,
  tooltip: PropTypes.string,
};

export default TooltipComponent;
