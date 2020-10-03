import React from 'react';
import { useTheme } from './Context';
import Base from './Base';
import Card, { CardContent } from './Card';

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Modal = ( {
  className,
  children,
  containerStyle,
  overlayStyle,
  contentStyle,
  ...props
} ) => {
  const [ theme ] = useTheme();
  const containerProps = Object.assign({}, theme.default.modal.container, containerStyle);
  const overlayProps = Object.assign({}, theme.default.modal.overlay, overlayStyle);
  const contentProps = Object.assign({}, theme.default.modal.content, contentStyle);

  return (
    <Base 
      classes={className}
      {...containerProps}
      {...props}
      >
      <Base {...overlayProps} />
      <Base
        {...contentProps}
        >
        {children}
      </Base>
    </Base>
    )
}

export const ModalCard = ( {
  className,
  children,
  ...otherProps
} ) => {
  const defaultProps = {
    overflow: 'auto',
    display: 'flex',
    flex: 'col'
  }

  const props = Object.assign({}, defaultProps, otherProps);

  return (
    <Card
      {...props}
      >
      {children}
    </Card>
    );
}


export const ModalCardContent = ( {
  className,
  children,
  ...otherProps
} ) => {
  const defaultProps = {
    overflow: 'y-auto',
  }

  const props = Object.assign({}, defaultProps, otherProps);

  return (
    <CardContent
      {...props}
      >
      {children}
    </CardContent>
    );
}
export default Modal;