import React from 'react';
import { useTheme } from './Context';
import Base from './Base';

const Headline = ( {
  className,
  children,
  level,
  ...props
} ) => {
  let [ theme ] = useTheme();
  let themeBase = theme.default.headline;
  level = level || 1;
  let classes = props.className ? props.className : [];

  const tag = `h${level}`;
  const styleProps = themeBase[tag];
  props = Object.assign({}, styleProps, props);

  return(
    <Base
      tagName={tag}
      classes={className}
      {...props}
      >{children}</Base>
    );
}

export default Headline;