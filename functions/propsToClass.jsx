import resolveConfig from 'tailwindcss/resolveConfig';
const defaultConfig = resolveConfig({});

import propsMap from './propsMap';
import propsValues from './propsValues';

const config = Object.assign({}, defaultConfig.theme, propsValues);
const configVariants = defaultConfig.variants;

const variantOptions = [ 'default', 'xs', 'sm', 'md', 'lg', 'xl', 'hover', 'focus', 'active', 'motion-safe', 'motion-reduce' ];

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
    return valueToClassName( value, callback );
  } catch ( error ) {
    console.log("Error converting to a component", error);
  }
}

const valueToClassName = ( value, callback, prefix ) => {
  prefix = prefix || "";

  if(Array.isArray(value)){
    return value.map( val => valueToClassName( val, callback, prefix ) );
  }
  else if( typeof value === "object" ){
    return variantOptions.map( variant => {
      return value[variant] ? valueToClassName(value[variant], callback, variant === "default" ? "" : variant) : [];
    } );
  }
  else {
    return (prefix && prefix !== "xs" ? prefix + ":" : "") + (callback ? callback(value) : value)
  }
}

/**
 * [description]
 * @param  {[type]} value   [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
// const isValidValue = ( value, options ) => {
//   if(!options) return true;

//   if(Array.isArray(options) && options.indexOf(value) > -1) return true;



//   return false;
// }

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const propsToClass = ( props ) => {
  const classes = Object.keys(props).map( prop => {
    if( config[prop] || propsMap[prop] ){
      const value = false || props[prop];
      delete props[prop];

      return propToClass({
        callback: null || propsMap[prop],
        value: value,
        options: config[prop]
      })
    }
    else {
      return false;
    }
  });

  return classes.filter(val => val !== false).flat(3);
}

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
export const removeStylingProps = ( props ) => {
  let cleanProps = {};
  for(var i in props){
    if(config[i] || propsMap[i]) continue;
    cleanProps[i] = props[i];
  }
  return cleanProps;
}

export default propsToClass;
