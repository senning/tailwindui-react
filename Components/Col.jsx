import React from 'react';
import { useTheme } from './Context';
import Base from './Base';

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Row = ( {
  className,
  children,
  ...props
} ) => {
  const defaults = {
    display: 'flex',
    flexDirection: 'col',
    justifyContent: 'between',
    alignItems: 'center',
  };

  props = Object.assign({}, defaults, props);

  return (
    <Base 
      classes={className}
      {...props}
      >
      {children}
    </Base>
    )
}

export default Row