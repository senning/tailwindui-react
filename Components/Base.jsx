import React from 'react';
import { useTheme } from './Context';
import propsToClass, { removeStylingProps } from '../functions/propsToClass';

// const variants = [ 'sm', 'md', 'lg', 'xl', 'hover', 'focus', 'active', 'motion-safe', 'motion-reduce' ];

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
  ...props
} ) => {
  const Tag = tagName ? tagName : 'div';

  const propClasses = propsToClass(props);
  classes = classes ? [].concat(classes, propClasses) : [...propClasses];

  const cleanProps = removeStylingProps(props);

  return (
    <Tag
      className={Array.isArray(classes) ? classes.join(" ") : classes}
      {...cleanProps}
      >{props.children}</Tag>
    );
}


export default Base;