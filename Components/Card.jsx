import React from 'react';
import { useTheme } from './Context';
import Base from './Base';

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Card = ( {
  className,
  children,
  ...props
} ) => {
  const [ theme ] = useTheme();
  props = Object.assign({}, theme.default.card.container, props);

  return (
    <Base 
      classes={className}
      {...props}
      >
      {children}
    </Base>
    )
}

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const CardContent = ( {
  className,
  children,
  ...props
} ) => {
  const [ theme ] = useTheme();
  props = Object.assign({}, theme.default.card.content, props)

  return (
    <Base
      classes={className}
      {...props}
      >
      {children}
    </Base>
    )
} 

const CardHeader = ( {
  className,
  children,
  ...props
} ) => {
  const [ theme ] = useTheme();
  props = Object.assign({}, theme.default.card.header, props)

  return (
    <Base
      classes={className}
      {...props}
      >
      {children}
    </Base>
    )
}

const CardFooter = ( {
  className,
  children,
  ...props
} ) => {
  const [ theme ] = useTheme();
  props = Object.assign({}, theme.default.card.footer, props)

  return (
    <Base
      classes={className}
      {...props}
      >
      {children}
    </Base>
    )
}

export default Card;
export { CardContent, CardHeader, CardFooter }