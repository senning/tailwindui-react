import React, { useMemo } from 'react';
import { useTheme } from './Context';
import Input from './Input';
import Label from './Label';
import Base from './Base';

import _uniqueId from 'lodash/uniqueId';

const InputGroup = ( {
  id,
  label,
  styleGroupContainer,
  styleInputContainer,
  before,
  after,
  ...otherProps
} ) => {
  const [ theme ] = useTheme();
  const fieldId = useMemo(() => {
    return id || _uniqueId(name || 'field-')
  }, [id, _uniqueId]);

  const groupStyle = Object.assign({}, theme.default.inputGroup.groupContainer, styleGroupContainer);
  const inputStyle = Object.assign({}, theme.default.inputGroup.inputContainer, styleInputContainer);
  const controlProps = Object.assign({}, theme.default.inputGroup.input, otherProps);

  return (
    <Base {...groupStyle}>
      <Label htmlFor={fieldId}>{label}</Label>
      <Base {...inputStyle}>
        {before}
        <Input
          id={fieldId}
          {...controlProps}
          />
        {after}
      </Base>
    </Base>
    );
}

export default InputGroup;