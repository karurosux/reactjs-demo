import React from 'react';
import propTypes from 'prop-types';

function ChildRouter(props) {
  let children = props.children;

  if (!Array.isArray(children)) {
    children = [children];
  }

  return getChildByRoute(children);
}

function getChildByRoute(children) {
  const path = window.location.pathname;
  let selectedRoute = children.filter(c => c.props.path === path)[0];

  if (!selectedRoute) {
    selectedRoute = children.filter(c => c.props.default)[0];
  }

  return selectedRoute || <div />;
}

ChildRouter.propTypes = {
  children: propTypes.array.isRequired
};

export default ChildRouter;
