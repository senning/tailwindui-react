import React, { useMemo } from 'react';
import { useTheme } from './Context';
import Base from './Base';
const defaultTagName = "input";
const defaultType = "text";

import _uniqueId from 'lodash/uniqueId';

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Input = ( props ) => {
  const { 
    tagName,
    type,
    name,
    id,
    ...otherProps
    } = props;
  const [ theme ] = useTheme();

  const allProps = Object.assign({}, theme.default.input, otherProps);
  const fieldId = useMemo(() => {
    return id || _uniqueId(name || 'prefix-')
  }, [id, _uniqueId]);

  return (
    <Base 
      tagName={tagName || defaultTagName}
      type={type || defaultType}
      id={fieldId}
      {...allProps}
      />
  );
}

export default Input;