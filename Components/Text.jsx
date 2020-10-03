import React from 'react';
import { useTheme } from './Context';
import Base from './Base';
const defaultTagName = "p";

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Text = ( props ) => {
  const { 
    tagName,
    children,
    ...otherProps
    } = props;
  const [ theme ] = useTheme();

  const allProps = Object.assign({}, theme.default.typography.p, otherProps);

  return (
    <Base 
      tagName={tagName || defaultTagName}
      {...allProps}
      >
      {children}
    </Base>
  );
}

export default Text;