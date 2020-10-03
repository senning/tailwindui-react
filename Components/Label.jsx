import React, { useMemo } from 'react';
import { useTheme } from './Context';
import Base from './Base';

const defaultTagName = "label";

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Label = ( props ) => {
  const { 
    tagName,
    ...otherProps
    } = props;
  const [ theme ] = useTheme();

  const allProps = Object.assign({}, theme.default.label, otherProps);

  return (
    <Base 
      tagName={tagName || defaultTagName}
      {...allProps}
      />
  );
}

export default Label;