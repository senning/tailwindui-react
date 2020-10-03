import React from 'react';
import { useTheme } from './Context';

const variants = [ 'sm', 'md', 'lg', 'xl', 'hover', 'focus', 'active', 'motion-safe', 'motion-reduce' ];

/**
 * Base component
 * @param  {[type]}    options.tagName   The tag to use for this element. `div` by default
 * @param  {[type]}    options.container If boolean true, add `container` class. If array, elements are treated as responsive variants
 * @param  {...[type]} options.props     All other props are passed to the element
 * @return {[type]}                      [description]
 */
const Base = ( {
  classes,
  tagName,
  container,
  boxSizing,
  display,
  floats,
  clear,
  objectFit,
  objectPosition,
  overflow,
  overscroll,
  position,
  inset,
  topRightBottomLeft,
  visibility,
  zIndex,
  flexDirection,
  flexWrap,
  flex,
  flexGrow,
  flexShrink,
  order,
  gridTemplateColumns,
  gridColumnAuto,
  gridColumnSpan,
  gridColumnStart,
  gridColumnEnd,
  gridTemplateRows,
  gridRowAuto,
  gridRowSpan,
  gridRowStart,
  gridRowEnd,
  gridFlow,
  gap,
  justify,
  justifyItems,
  justifySelf,
  alignContent,
  alignItems,
  alignSelf,
  placeContent,
  placeItems,
  placeSelf,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  mNegative,
  mxNegative,
  myNegative,
  mtNegative,
  mrNegative,
  mbNegative,
  mlNegative,
  spaceX,
  spaceY,
  spaceXNegative,
  spaceYNegative,
  spaceXReverse,
  spaceYReverse,
  w,
  minW,
  maxW,
  h,
  minH,
  maxH,
  fontFamily,
  text,
  fontSmoothing,
  fontStyle,
  font,
  fontVariantNumeric,
  tracking,
  leading,
  listStyleType,
  listStylePosition,
  placeholder,
  placeholderOpacity,
  textAlignment,
  textColor,
  textOpacity,
  textDecoration,
  textTransform,
  align,
  whitespace,
  wordBreak,
  bg,
  bgAttachment,
  backgroundAttachment,
  bgClip,
  backgroundClip,
  bgColor,
  backgroundColor,
  bgColour,
  backgroundColour,
  bgOpacity,
  backgroundOpacity,
  bgPosition,
  backgroundPosition,
  bgRepeat,
  backgroundRepeat,
  bgSize,
  backgroundSize,
  bgImage,
  backgroundImage,
  bgGradient,
  backgroundGradient,
  bgGradientFrom,
  backgroundGradientFrom,
  bgGradientTo,
  backgroundGradientTo,
  rounded,
  roundedT,
  roundedTR,
  roundedR,
  roundedBR,
  roundedB,
  roundedBL,
  roundedL,
  roundedTL,
  border,
  borderT,
  borderR,
  borderB,
  borderL,
  borderColor,
  borderColour,
  borderOpacity,
  borderStyle,
  divideY,
  divideX,
  divideXReverse,
  divideYReverse,
  divideColor,
  divideColour,
  divideStyle,
  borderCollapse,
  table,
  tableLayout,
  shadow,
  opacity,
  transition,
  duration,
  ease,
  delay,
  animate,
  scale,
  scaleX,
  scaleY,
  rotate,
  translate,
  translateX,
  translateY,
  skew,
  skewX,
  skewY,
  origin,
  appearance,
  cursor,
  outline,
  pointerEvents,
  resize,
  select,
  fill,
  stroke,
  strokeWidth,
  srOnly,
  notSrOnly,
  prose,
  ...props
} ) => {
  const Tag = tagName ? tagName : 'div';
  classes = classes ? classes: [];

  // Container
  classes.concat(propToClass({
    callback: ( value ) => `${value}`,
    value: container,
    options: [ 'container' ]
  }));  

  // Box sizing
  classes.concat(propToClass({
    callback: ( value ) => `${value}-sizing`,
    value: boxSizing,
    options: [ 'box', 'content' ]
  }));  

  // Display
  if( typeof display === "string" ){
    classes.concat( [display] );
  }
  else if( Array.isArray( display ) ){
    classes.concat( display );
  }

  // Float
  classes.concat(propToClass({
    callback: value => `float-${value}`,
    value: floats,
    options: [ 'right', 'left', 'none' ]
  }));

  classes.concat(propToClass({
    value: floats,
    options: [ 'clearfix' ]
  }));  

  // Clear
  classes.concat(propToClass({
    callback: value => `clear-${value}`,
    value: clear,
    options: [ 'left', 'right', 'both', 'none' ]
  }));

  // Object fit
  classes.concat(propToClass({
    callback: value => `object-${value}`,
    value: objectFit,
    options: [ 'contain', 'cover', 'fill', 'none', 'scale-down' ]
  }));

  // Object Position
  classes.concat(propToClass({
    callback: value => `object-${value}`,
    value: objectPosition,
    options: [ 'bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top' ]
  }));

  // Overflow
  classes.concat(propToClass({
    callback: value => `overflow-${value}`,
    value: overflow,
    options: [ 'auto', 'hidden', 'visible', 'scroll', 'x-auto', 'y-auto', 'x-hidden', 'y-hidden', 'x-visible', 'y-visible', 'x-scroll', 'y-scroll' ]
  }));

  // Overscroll
  classes.concat(propToClass({
    callback: value => `overscroll-${value}`,
    value: overscroll,
    options: [ 'auto', 'contain', 'none', 'y-auto', 'y-contain', 'y-none', 'x-auto', 'x-contain', 'x-none' ]
  }));

  // position
  classes.concat(propToClass({
    value: position,
    options: [ 'static', 'fixed', 'absolute', 'relative', 'sticky' ]
  }));

  // inset
  classes.concat(propToClass({
    callback: value => `inset-${value}`,
    value: inset,
    options: [ '0', 'auto', 'y-0', 'x-0', 'y-auto', 'x-auto' ]
  }));

  // topRightBottomLeft
  classes.concat(propToClass({
    value: topRightBottomLeft,
    options: [ 'top-0', 'right-0', 'bottom-0', 'left-0', 'top-auto', 'right-auto', 'bottom-auto', 'left-auto' ]
  }));

  // visibility
  classes.concat(propToClass({
    value: visibility,
    options: [ 'visible', 'invisible' ]
  }));

  // zIndex
  classes.concat(propToClass({
    callback: value => `z-${value}`,
    value: zIndex,
    options: [ '0', '10', '20', '30', '40', '50', 'auto' ]
  }));

  // flexDirection
  classes.concat(propToClass({
    callback: value => `flex-${value}`,
    value: flexDirection,
    options: [ 'row', 'row-reverse', 'col', 'col-reverse' ]
  }));

  // flexWrap
  classes.concat(propToClass({
    callback: value => `flex-${value}`,
    value: flexWrap,
    options: [ 'wrap', 'wrap-reverse', 'no-wrap' ]
  }));

  // flex
  classes.concat(propToClass({
    callback: value => `flex-${value}`,
    value: flex,
    options: [ '1', 'auto', 'initial', 'none' ]
  }));

  // flexDirection
  classes.concat(propToClass({
    callback: value => `flex-${value}`,
    value: flexGrow,
    options: [ 'grow-0', 'grow' ]
  }));

  // flexShrink
  classes.concat(propToClass({
    callback: value => `flex-${value}`,
    value: flexShrink,
    options: [ 'shrink-0', 'shrink' ]
  }));

  // order
  classes.concat(propToClass({
    callback: value => `order-${value}`,
    value: order,
    options: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'first', 'last', 'none' ]
  }));

  // gridTemplateColumns
  classes.concat(propToClass({
    callback: value => `grid-cols-${value}`,
    value: gridTemplateColumns,
    options: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'none' ]
  }));

  // gridColumnAuto
  classes.concat(propToClass({
    callback: value => `col-${value}`,
    value: gridColumnAuto,
    options: [ 'auto' ]
  }));

  // gridColumnSpan
  classes.concat(propToClass({
    callback: value => `col-span-${value}`,
    value: gridColumnSpan,
    options: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
  }));

  // gridColumnStart
  classes.concat(propToClass({
    callback: value => `col-start-${value}`,
    value: gridColumnStart,
    options: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto' ]
  }));

  // gridColumnEnd
  classes.concat(propToClass({
    callback: value => `col-end-${value}`,
    value: gridColumnEnd,
    options: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto' ]
  }));

  // gridTemplateRows
  classes.concat(propToClass({
    callback: value => `grid-rows-${value}`,
    value: gridTemplateRows,
    options: [ '1', '2', '3', '4', '5', '6', 'none' ]
  }));

  // rowRowAuto
  classes.concat(propToClass({
    callback: value => `row-${value}`,
    value: gridRowAuto,
    options: [ 'auto' ]
  }));

  // gridRowSpan
  classes.concat(propToClass({
    callback: value => `row-span-${value}`,
    value: gridRowSpan,
    options: [ '1', '2', '3', '4', '5', '6' ]
  }));

  // gridRowStart
  classes.concat(propToClass({
    callback: value => `row-start-${value}`,
    value: gridRowStart,
    options: [ '1', '2', '3', '4', '5', '6', '7', 'auto' ]
  }));

  // gridRowEnd
  classes.concat(propToClass({
    callback: value => `row-end-${value}`,
    value: gridRowEnd,
    options: [ '1', '2', '3', '4', '5', '6', '7', 'auto' ]
  }));

  // gridFlow
  classes.concat(propToClass({
    callback: value => `grid-flow-${value}`,
    value: gridFlow,
    options: [ 'row', 'col', 'row-dense', 'col-dense' ]
  }));

  // gap
  classes.concat(propToClass({
    callback: value => `gap-${value}`,
    value: gap,
    options: [ 
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px',
      'x-0', 'x-1', 'x-2', 'x-3', 'x-4', 'x-5', 'x-6', 'x-8', 'x-10', 'x-12', 'x-16', 'x-20', 'x-24', 'x-32', 'x-40', 'x-48', 'x-56', 'x-64', 'x-px',
      'y-0', 'y-1', 'y-2', 'y-3', 'y-4', 'y-5', 'y-6', 'y-8', 'y-10', 'y-12', 'y-16', 'y-20', 'y-24', 'y-32', 'y-40', 'y-48', 'y-56', 'y-64', 'y-px'
      ]
  }));

  // justify
  classes.concat(propToClass({
    callback: value => `justify-${value}`,
    value: justify,
    options: [ 'start', 'end', 'center', 'between', 'around', 'evenly' ]
  }));

  // justifyItems
  classes.concat(propToClass({
    callback: value => `justify-items-${value}`,
    value: justifyItems,
    options: [ 'auto', 'start', 'end', 'center', 'stretch' ]
  }));

  // justifySelf
  classes.concat(propToClass({
    callback: value => `justify-self-${value}`,
    value: justifySelf,
    options: [ 'auto', 'start', 'end', 'center', 'stretch' ]
  }));

  // alignContent
  classes.concat(propToClass({
    callback: value => `content-${value}`,
    value: alignContent,
    options: [ 'center', 'start', 'end', 'between', 'around', 'evenly' ]
  }));

  // alignItems
  classes.concat(propToClass({
    callback: value => `items-${value}`,
    value: alignItems,
    options: [ 'start', 'end', 'center', 'baseline', 'stretch' ]
  }));

  // alignSelf
  classes.concat(propToClass({
    callback: value => `self-${value}`,
    value: alignSelf,
    options: [ 'auto', 'start', 'end', 'center', 'stretch' ]
  }));

  // placeContent
  classes.concat(propToClass({
    callback: value => `place-content-${value}`,
    value: placeContent,
    options: [ 'center', 'start', 'end', 'between', 'around', 'evenly', 'stretch' ]
  }));

  // placeItems
  classes.concat(propToClass({
    callback: value => `place-items-${value}`,
    value: placeItems,
    options: [ 'auto', 'start', 'end', 'center', 'stretch' ]
  }));

  // placeSelf
  classes.concat(propToClass({
    callback: value => `place-self-${value}`,
    value: placeSelf,
    options: [ 'auto', 'start', 'end', 'center', 'stretch' ]
  }));

  // padding
  classes.concat(propToClass({
    callback: value => `p-${value}`,
    value: p,
    options: [
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // padding x
  classes.concat(propToClass({
    callback: value => `px-${value}`,
    value: px,
    options: [
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // padding y
  classes.concat(propToClass({
    callback: value => `py-${value}`,
    value: py,
    options: [
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // padding top
  classes.concat(propToClass({
    callback: value => `pt-${value}`,
    value: pt,
    options: [
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // padding right
  classes.concat(propToClass({
    callback: value => `pr-${value}`,
    value: pr,
    options: [
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // padding bottom
  classes.concat(propToClass({
    callback: value => `pb-${value}`,
    value: pb,
    options: [
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // padding left
  classes.concat(propToClass({
    callback: value => `pl-${value}`,
    value: pl,
    options: [
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // margin
  classes.concat(propToClass({
    callback: value => `m-${value}`,
    value: m,
    options: [
      'auto', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // margin x
  classes.concat(propToClass({
    callback: value => `mx-${value}`,
    value: mx,
    options: [
      'auto', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // margin y
  classes.concat(propToClass({
    callback: value => `my-${value}`,
    value: my,
    options: [
      'auto', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // margin top
  classes.concat(propToClass({
    callback: value => `mt-${value}`,
    value: mt,
    options: [
      'auto', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // margin right
  classes.concat(propToClass({
    callback: value => `mr-${value}`,
    value: mr,
    options: [
      'auto', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // margin bottom
  classes.concat(propToClass({
    callback: value => `mb-${value}`,
    value: mb,
    options: [
      'auto', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // margin left
  classes.concat(propToClass({
    callback: value => `ml-${value}`,
    value: ml,
    options: [
      'auto', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative margin
  classes.concat(propToClass({
    callback: value => `-m-${value}`,
    value: mNegative,
    options: [
      '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative margin x
  classes.concat(propToClass({
    callback: value => `-mx-${value}`,
    value: mxNegative,
    options: [
      '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative margin y
  classes.concat(propToClass({
    callback: value => `-my-${value}`,
    value: myNegative,
    options: [
      '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative margin top
  classes.concat(propToClass({
    callback: value => `-mt-${value}`,
    value: mtNegative,
    options: [
      '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative margin right
  classes.concat(propToClass({
    callback: value => `-mr-${value}`,
    value: mrNegative,
    options: [
      '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative margin bottom
  classes.concat(propToClass({
    callback: value => `-mb-${value}`,
    value: mbNegative,
    options: [
      '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative margin left
  classes.concat(propToClass({
    callback: value => `-ml-${value}`,
    value: mlNegative,
    options: [
      '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // space between x
  classes.concat(propToClass({
    callback: value => `space-x-${value}`,
    value: spaceX,
    options: [
      'px', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // space between y
  classes.concat(propToClass({
    callback: value => `space-y-${value}`,
    value: spaceY,
    options: [
      'px', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative space between x
  classes.concat(propToClass({
    callback: value => `-space-x-${value}`,
    value: spaceXNegative,
    options: [
      'px', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // negative space between y
  classes.concat(propToClass({
    callback: value => `-space-y-${value}`,
    value: spaceYNegative,
    options: [
      'px', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // space x reverse
  classes.concat(propToClass({
    callback: (value) => value ? 'space-x-reverse' : false,
    value: spaceXReverse
  }));

  // space y reverse
  classes.concat(propToClass({
    callback: (value) => value ? 'space-y-reverse': false,
    value: spaceYReverse
  }));

  // width
  classes.concat(propToClass({
    callback: value => `w-${value}`,
    value: w,
    options: [
      '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px',
      'auto', 'px', 'full', 'screen',
      '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '2/6', '3/6', '4/6', '5/6', '1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12',
    ]
  }));

  // min width
  classes.concat(propToClass({
    callback: value => `min-w-${value}`,
    value: minW,
    options: [ '0', 'full' ]
  }));

  // max width
  classes.concat(propToClass({
    callback: value => `max-w-${value}`,
    value: maxW,
    options: [ 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', 'full', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl' ]
  }));

  // height
  classes.concat(propToClass({
    callback: value => `h-${value}`,
    value: h,
    options: [
      'auto', 'px', 'full', 'screen', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', 'px'    
    ]
  }));

  // min height
  classes.concat(propToClass({
    callback: value => `min-h-${value}`,
    value: minW,
    options: [ '0', 'full', 'screen' ]
  }));

  // max height
  classes.concat(propToClass({
    callback: value => `max-h-${value}`,
    value: minW,
    options: [ 'full', 'screen' ]
  }));

  // font family
  classes.concat(propToClass({
    callback: value => `font-${value}`,
    value: fontFamily,
    options: [ 'sans', 'serif', 'mono' ]
  }));

  // font size
  classes.concat(propToClass({
    callback: value => `text-${value}`,
    value: text,
    options: [ 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ]
  }));

  // font smoothing
  classes.concat(propToClass({
    value: fontSmoothing,
    options: [ 'antialiased', 'subpixel-antialiased' ]
  }));

  // font style
  classes.concat(propToClass({
    value: fontStyle,
    options: [ 'italic', 'not-italic' ]
  }));

  // font weight
  classes.concat(propToClass({
    callback: value => `font-${value}`,
    value: font,
    options: [ 'hairline', 'thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black' ]
  }));

  // font variant numeric
  classes.concat(propToClass({
    value: fontVariantNumeric,
    options: [ 'normal-nums', 'ordinal', 'slashed-zero', 'lining-nums', 'oldstyle-nums', 'proportional-nums', 'tabular-nums', 'diagonal-fractions', 'stacked-fractions' ]
  }));

  // letter spacing
  classes.concat(propToClass({
    callback: value => `tracking-${value}`,
    value: tracking,
    options: [ 'tighter', 'tight', 'normal', 'wide', 'wider', 'widest' ]
  }));

  // line height
  classes.concat(propToClass({
    callback: value => `leading-${value}`,
    value: leading,
    options: [ 'none', 'tight', 'snug', 'normal', 'relaxed', 'loose', '3', '4', '5', '6', '7', '8', '9', '10' ]
  }));

  // list style type
  classes.concat(propToClass({
    value: listStyleType,
    options: [ 'none', 'disc', 'decimal' ]
  }));

  // list style position
  classes.concat(propToClass({
    callback: value => `list-${value}`,
    value: listStylePosition,
    options: [ 'inside', 'outside' ]
  }));

  // placeholder
  classes.concat(propToClass({
    callback: value => `placeholder-${value}`,
    value: placeholder
  }));

  // placeholder opacity
  classes.concat(propToClass({
    callback: value => `placeholder-opacity-${value}`,
    value: placeholderOpacity,
    options: [ '0', '25', '50', '75', '100' ]
  }));

  // text alignment
  classes.concat(propToClass({
    callback: value => `text-${value}`,
    value: textAlignment,
    options: [ 'left', 'center', 'right', 'justify' ]
  }));

  // text colour
  classes.concat(propToClass({
    callback: value => `text-${value}`,
    value: textColor
  }));

  // text opacity
  classes.concat(propToClass({
    callback: value => `text-opacity-${value}`,
    value: textOpacity,
    options: [ '0', '25', '50', '75', '100' ]
  }));

  // text decoration
  classes.concat(propToClass({
    value: textDecoration,
    options: [ 'underline', 'line-through', 'no-underline' ]
  }));

  // text transform
  classes.concat(propToClass({
    value: textTransform,
    options: [ 'uppercase', 'lowercase', 'capitalize', 'normal-case' ]
  }));

  // vertical align
  classes.concat(propToClass({
    callback: value => `align-${value}`,
    value: align,
    options: [ 'baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom' ]
  }));

  // whitespace
  classes.concat(propToClass({
    callback: value => `whitespace-${value}`,
    value: whitespace,
    options: [ 'normal', 'no-wrap', 'pre', 'pre-line', 'pre-wrap' ]
  }));

  // word break
  classes.concat(propToClass({
    value: wordBreak,
    options: [ 'break-normal', 'break-words', 'break-all', 'truncate' ]
  }));

  // background attachment
  classes.concat(propToClass({
    callback: value => `bg-${value}`,
    value: bgAttachment || backgroundAttachment || bg,
    options: [ 'fixed', 'local', 'scroll' ]
  }));

  // background clip
  classes.concat(propToClass({
    callback: value => `bg-clip-${value}`,
    value: bgClip || backgroundClip,
    options: [ 'border', 'padding', 'content', 'text' ]
  }));

  // background color
  classes.concat(propToClass({
    callback: value => `bg-${value}`,
    value: bgColor || backgroundColor || bgColour || backgroundColour || bg
  }));

  // background opacity
  classes.concat(propToClass({
    callback: value => `bg-opacity-${value}`,
    value: bgOpacity || backgroundOpacity,
    options: [ 'break-normal', 'break-words', 'break-all', 'truncate' ]
  }));

  // background position
  classes.concat(propToClass({
    callback: value => `bg-${value}`,
    value: bgPosition || backgroundPosition || bg,
    options: [ 'bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top' ]
  }));

  // background repeat
  classes.concat(propToClass({
    callback: value => `bg-${value}`, 
    value: bgRepeat || backgroundRepeat || bg,
    options: [ 'repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'repeat-round', 'repeat-space' ]
  }));

  // background size
  classes.concat(propToClass({
    callback: value => `bg-${value}`,
    value: bgSize || backgroundSize || bg,
    options: [ 'auto', 'cover', 'contain' ]
  }));

  // background image
  classes.concat(propToClass({
    callback: value => `bg-${value}`,
    value: bgImage || backgroundImage || bg,
    options: [ 'none' ]
  }));

  // background gradient
  classes.concat(propToClass({
    callback: value => `bg-gradient-to-${value}`,
    value: bgGradient || backgroundGradient || bgImage || backgroundImage || bg,
    options: [ 't', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl' ]
  }));

  // background gradient from
  classes.concat(propToClass({
    callback: value => `from-${value}`,
    value: bgGradientFrom || backgroundGradientFrom
  }));

  // background gradient to
  classes.concat(propToClass({
    callback: value => `to-${value}`,
    value: bgGradientTo || backgroundGradientTo
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded`,
    value: rounded,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-${value}`,
    value: rounded,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-t`,
    value: roundedT,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-t-${value}`,
    value: rounded,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-tr`,
    value: roundedTR,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-tr-${value}`,
    value: roundedTR,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-r`,
    value: roundedR,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-r-${value}`,
    value: roundedR,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-br`,
    value: roundedBR,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-br-${value}`,
    value: roundedBR,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-b`,
    value: roundedB,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-b-${value}`,
    value: roundedB,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded`,
    value: rounded,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-bl-${value}`,
    value: roundedBL,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-l`,
    value: roundedL,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-l-${value}`,
    value: roundedL,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-tl`,
    value: roundedTL,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `rounded-tl-${value}`,
    value: roundedTL,
    options: [ 'none', 'sm', 'md', 'lg', 'full' ]
  }));

  // border
  classes.concat(propToClass({
    callback: value => `border`,
    value: border,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `border-${value}`,
    value: border,
    options: [ '0', '2', '4', '8' ]
  }));

  // border
  classes.concat(propToClass({
    callback: value => `border-t`,
    value: borderT,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `border-t-${value}`,
    value: borderT,
    options: [ '0', '2', '4', '8' ]
  }));

  // border
  classes.concat(propToClass({
    callback: value => `border-r`,
    value: borderR,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `border-r-${value}`,
    value: borderR,
    options: [ '0', '2', '4', '8' ]
  }));

  // border
  classes.concat(propToClass({
    callback: value => `border-b`,
    value: borderB,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `border-b-${value}`,
    value: borderB,
    options: [ '0', '2', '4', '8' ]
  }));

  // border
  classes.concat(propToClass({
    callback: value => `border-l`,
    value: borderL,
    options: [ true ]
  }));

  // border radius
  classes.concat(propToClass({
    callback: value => `border-l-${value}`,
    value: borderL,
    options: [ '0', '2', '4', '8' ]
  }));

  // border color
  classes.concat(propToClass({
    callback: value => `border-${value}`,
    value: borderColour || borderColor || border
  }));

  // border opacity
  classes.concat(propToClass({
    callback: value => `border-opacity-${value}`,
    value: borderOpacity,
    options: [ '0', '25', '50', '75', '100' ]
  }));

  // border style
  classes.concat(propToClass({
    callback: value => `border-${value}`,
    value: borderStyle || border,
    options: [ 'solid', 'dashed', 'dotted', 'double', 'none' ]
  }));

  // divide width
  classes.concat(propToClass({
    callback: value => `divide-y`,
    value: divideY,
    options: [ true ]
  }));

  // divide width
  classes.concat(propToClass({
    callback: value => `divide-y-${value}`,
    value: divideY,
    options: [ '0', '2', '4', '8' ]
  }));

  // divide width
  classes.concat(propToClass({
    callback: value => `divide-x`,
    value: divideX,
    options: [ true ]
  }));

  // divide width
  classes.concat(propToClass({
    callback: value => `divide-x-${value}`,
    value: divideX,
    options: [ '0', '2', '4', '8' ]
  }));

  // divide width reverse
  classes.concat(propToClass({
    callback: value => value ? 'divide-x-reverse' : false,
    value: divideXReverse
  }));

  // divide width reverse
  classes.concat(propToClass({
    callback: value => value ? 'divide-y-reverse' : false,
    value: divideYReverse
  }));

  // divide width reverse
  classes.concat(propToClass({
    callback: value => `divide-${value}`,
    value: divideColour || divideColour
  }));

  // divide opacity
  classes.concat(propToClass({
    callback: value => `divide-opacity-${value}`,
    value: divideOpacity,
    options: [ '0', '25', '50', '75', '100']
  }));

  // divide style
  classes.concat(propToClass({
    callback: value => `divide-${value}`,
    value: divideStyle,
    options: [ 'solid', 'dashed', 'dotted', 'double', 'none' ]
  }));

  // border collapse
  classes.concat(propToClass({
    callback: value => `border-${value}`,
    value: borderCollapse || border,
    options: [ 'collapse', 'separate' ]
  }));

  // table layout
  classes.concat(propToClass({
    callback: value => `table-${value}`,
    value: tableLayout || table,
    options: [ 'auto', 'fixed' ]
  }));

  // box shadow
  classes.concat(propToClass({
    callback: value => `shadow`,
    value: shadow,
    options: [ true ]
  }));

  // box shadow
  classes.concat(propToClass({
    callback: value => `shadow-${value}`,
    value: shadow,
    options: [ 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'outline', 'none']
  }));

  // opacity
  classes.concat(propToClass({
    callback: value => `opacity-${value}`,
    value: opacity,
    options: [ '0', '25', '50', '75', '100']
  }));

  // transition
  classes.concat(propToClass({
    callback: value => `transition`,
    value: transition,
    options: [ true ]
  }));

  // transition
  classes.concat(propToClass({
    callback: value => `transition-${value}`,
    value: transition,
    options: [ 'none', 'all' ]
  }));

  // transition
  classes.concat(propToClass({
    callback: value => `transition-${value}`,
    value: transition,
    options: [ 'colors' ]
  }));

  // transition
  classes.concat(propToClass({
    callback: value => `transition-${value}`,
    value: transition,
    options: [ 'opacity' ]
  }));

  // transition
  classes.concat(propToClass({
    callback: value => `transition-${value}`,
    value: transition,
    options: [ 'shadow' ]
  }));

  // transition
  classes.concat(propToClass({
    callback: value => `transition-${value}`,
    value: transition,
    options: [ 'transform' ]
  }));

  // transition duration
  classes.concat(propToClass({
    callback: value => `duration-${value}`,
    value: duration,
    options: [ '75', '100', '150', '200', '300', '500', '700', '1000' ]
  }));

  // transition timing
  classes.concat(propToClass({
    callback: value => `ease-${value}`,
    value: ease,
    options: [ 'linear', 'in', 'out', 'in-out' ]
  }));

  // transition
  classes.concat(propToClass({
    callback: value => `delay-${value}`,
    value: delay,
    options: [ '75', '100', '150', '200', '300', '500', '700', '1000' ]
  }));

  // animation
  classes.concat(propToClass({
    callback: value => `animate-${value}`,
    value: animate,
    options: [ 'none', 'spin', 'ping', 'pulse', 'bounce' ]
  }));

  // scale
  classes.concat(propToClass({
    callback: value => `scale-${value}`,
    value: scale,
    options: [ '0', '50', '75', '90', '95', '100', '105', '110', '125', '150' ]
  }));

  // scale
  classes.concat(propToClass({
    callback: value => `scale-x-${value}`,
    value: scaleX,
    options: [ '0', '50', '75', '90', '95', '100', '105', '110', '125', '150' ]
  }));

  // scale
  classes.concat(propToClass({
    callback: value => `scale-y-${value}`,
    value: scaleY,
    options: [ '0', '50', '75', '90', '95', '100', '105', '110', '125', '150' ]
  }));

  // rotate
  classes.concat(propToClass({
    callback: value => `rotate-${value}`,
    value: rotate,
    options: [ '0', '45', '90', '180' ]
  }));

  // rotate
  classes.concat(propToClass({
    callback: value => `-rotate-${value.replace('-','')}`,
    value: rotate,
    options: [ '-180', '-90', '-45' ]
  }));

  // translate
  classes.concat(propToClass({
    callback: value => `translate-x-${value}`,
    value: translateX || translate,
    options: [ 'px', 'full', '1/2', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64' ]
  }));

  // translate
  classes.concat(propToClass({
    callback: value => `-translate-x-${value.replace('-','')}`,
    value: translateX || translate,
    options: [ '-px', '-full', '-1/2', '-0', '-1', '-2', '-3', '-4', '-5', '-6', '-8', '-10', '-12', '-16', '-20', '-24', '-32', '-40', '-48', '-56', '-64' ]
  }));

  // translate
  classes.concat(propToClass({
    callback: value => `translate-y-${value}`,
    value: translateY || translate,
    options: [ 'px', 'full', '1/2', '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64' ]
  }));

  // translate
  classes.concat(propToClass({
    callback: value => `-translate-y-${value.replace('-','')}`,
    value: translateY || translate,
    options: [ '-px', '-full', '-1/2', '-0', '-1', '-2', '-3', '-4', '-5', '-6', '-8', '-10', '-12', '-16', '-20', '-24', '-32', '-40', '-48', '-56', '-64' ]
  }));

  // skew
  classes.concat(propToClass({
    callback: value => `skew-x-${value}`,
    value: skewX || skew,
    options: [ '0', '3', '6', '12' ]
  }));

  // skew
  classes.concat(propToClass({
    callback: value => `-skew-x-${value.replace('-', '')}`,
    value: skewX || skew,
    options: [ '-0', '-3', '-6', '-12' ]
  }));

  // skew
  classes.concat(propToClass({
    callback: value => `skew-y-${value}`,
    value: skewY || skew,
    options: [ '0', '3', '6', '12' ]
  }));

  // skew
  classes.concat(propToClass({
    callback: value => `-skew-y-${value.replace('-', '')}`,
    value: skewY || skew,
    options: [ '-0', '-3', '-6', '-12' ]
  }));

  // origin
  classes.concat(propToClass({
    callback: value => `origin-${value}`,
    value: origin,
    options: [ 'center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left' ]
  }));

  // appearance
  classes.concat(propToClass({
    callback: value => `appearance-${value}`,
    value: appearance,
    options: [ 'none' ]
  }));

  // cursor
  classes.concat(propToClass({
    callback: value => `cursor-${value}`,
    value: cursor,
    options: [ 'auto', 'default', 'pointer', 'wait', 'text', 'move', 'not-allowed' ]
  }));

  // outline
  classes.concat(propToClass({
    callback: value => `outline-${value}`,
    value: outline,
    options: [ 'none' ]
  }));

  // pointer events
  classes.concat(propToClass({
    callback: value => `pointer-events-${value}`,
    value: pointerEvents,
    options: [ 'none', 'auto' ]
  }));

  // resize
  classes.concat(propToClass({
    callback: value => `resize`,
    value: resize,
    options: [ true ]
  }));

  // resize
  classes.concat(propToClass({
    callback: value => `resize-${value}`,
    value: resize,
    options: [ 'none', 'y', 'x' ]
  }));

  // select
  classes.concat(propToClass({
    callback: value => `select-${value}`,
    value: select,
    options: [ 'none', 'text', 'all', 'auto' ]
  }));

  // fill
  classes.concat(propToClass({
    callback: value => `fill-${value}`,
    value: fill,
    options: [ 'current' ]
  }));

  // outline
  classes.concat(propToClass({
    callback: value => `stroke-${value}`,
    value: stroke,
    options: [ 'current' ]
  }));

  // outline
  classes.concat(propToClass({
    callback: value => `stroke-${value}`,
    value: strokeWidth || stroke,
    options: [ '0', '1', '2' ]
  }));

  // sr-only
  classes.concat(propToClass({
    callback: value => `sr-only`,
    value: srOnly
  }));

  // not-sr-only
  classes.concat(propToClass({
    callback: value => `not-sr-only`,
    value: notSrOnly
  }));

  // prose
  classes.concat(propToClass({
    callback: value => `prose`,
    value: prose,
    options: [ true ]
  }));

  // prose
  classes.concat(propToClass({
    callback: value => `prose-${value}`,
    value: prose,
    options: [ 'sm', 'lg', 'xl', '2xl' ]
  }));




  return (
    <Tag
      className={classes.join(" ")}
      {...props}
      >{props.children}</Tag>
    );
}

/**
 * [description]
 * @param  {[type]} options.classFunction [description]
 * @param  {[type]} options.value         [description]
 * @param  {[type]} options.options       [description]
 * @return {[type]}                       [description]
 */
const propToClass = ({
  callback,
  value,
  options,
  extensible
}) => {
  try {
    if( typeof value === "string" ){
      if(
        !options 
        || ( options && options.indexOf( value ) > -1 )
      ){
        return callback ? callback( value ) : value;        
      }
    }
    else {
      let classes = variants.map( size => {
        const sizeValue = callback ? callback( value[size] ) : value[size]
        return sizeValue ? size + ":" + sizeValue : false;
      }).filter();

      return classes;
    }
  } catch ( error ) {
    console.log("Error converting to a component", error);
  }

}

export default Base;