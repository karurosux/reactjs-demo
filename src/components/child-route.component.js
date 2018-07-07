import React from 'react';
import propTypes from 'prop-types';

function ChildRoute(props) {
  return <props.component />;
}

ChildRoute.propTypes = {
  path: propTypes.string.isRequired,
  component: propTypes.element.isRequired,
  default: propTypes.bool
};

export default ChildRoute;
