import React from 'react';
import { useTheme } from './Context';
import Base from './Base';
const defaultMode = "primary";
const defaultStyle = "solid";

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Button = ( props ) => {
  const { 
    mode,
    colour,
    style,
    className,
    icon,
    iconLeft,
    iconRight,
    iconTop,
    iconBottom,
    ...otherProps
    } = props;
  const [ theme ] = useTheme();

  //add classes for props
  let styleProps = {};

  //if we have a colour, style by colour
  if(colour){
    switch(style ? style : defaultStyle){
      case "solid":
        styleProps = {
          background: {
            xs: `${colour}-600`,
            hover: `${colour}-500`,
            focus: `${colour}-500`
          },
          text: `${colour}-100`
        }
        break;
      case "inverted":
        styleProps = {
          background: {
            xs: `${colour}-100`,
            hover: `${colour}-200`,
            focus: `${colour}-200`
          },
          text: `${colour}-600`
        }      
        break;
      case "outlined":
        styleProps = {
          background: {
            xs: `${colour}-100`,
            hover: `${colour}-200`,
            focus: `${colour}-200`
          },
          text: `${colour}-600`,
          border: [`${colour}-600`, 'solid', '2']
        }
        break;
      case "text":
        styleProps = {
          background: {
            xs: `transparent`,
            hover: `${colour}-200`,
            focus: `${colour}-200`
          },
          text: `${colour}-600`,
          shadow: 'none'
        }
        break;
    }
  }

  let allProps = theme.default.buttons.all;
  if(mode && theme.default.buttons[mode]){
    allProps = Object.assign({}, allProps, theme.default.buttons[mode]);
  }
  else {
    allProps = Object.assign({}, allProps, theme.default.buttons[defaultMode]);
  }
  allProps = Object.assign({}, allProps, styleProps, otherProps);

  return (
    <Base 
      tagName="button"
      type="button"
      classes={className}
      {...allProps}
      >
      {props.children}
    </Base>
  );
}

export default Button;