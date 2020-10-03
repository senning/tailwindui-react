const propsMap = {
  'container': value => value ? 'container' : false,
  'boxSizing': value => `${value}-sizing`,
  'float': value => value === 'clearfix' ? 'clearfix' : `float-${value}`,
  'clear': value => `clear-${value}`,
  'object': value => `object-${value}`,
  'objectFit': value => `object-${value}`,
  'objectPosition': value => `object-${value}`,
  'overflow': value => `overflow-${value}`,
  'overscroll': value => `overscroll-${value}`,
  'inset': value => `inset-${value}`,
  'position': value => value,
  'top': value => `top-${value}`,
  'right': value => `right-${value}`,
  'bottom': value => `bottom-${value}`,
  'left': value => `left-${value}`,
  'z': value => `z-${value}`,
  'flex': value => `flex-${value}`,
  'top': value => `top-${value}`,
  'order': value => `order-${value}`,
  'gridColumn': value => `grid-cols-${value}`,
  'gridColumnStart': value => `col-${value}`,
  'gridColumnEnd': value => `col-${value}`,
  'gridColumnSpan': value => `col-span-${value}`,
  'gridRow': value => `grid-rows-${value}`,
  'gridRowStart': value => `row-${value}`,
  'gridRowEnd': value => `row-${value}`,
  'gridRowSpan': value => `row-${value}`,
  'gridAutoFlow': value => `grid-flow-${value}`,
  'gap': value => `gap-${value}`,
  'justifyContent': value => `justify-${value}`,
  'justifyItems': value => `justify-items-${value}`,
  'justifySelf': value => `justify-self-${value}`,
  'alignContent': value => `content-${value}`,
  'alignItems': value => `items-${value}`,
  'alignSelf': value => `self-${value}`,
  'placeContent': value => `place-content-${value}`,
  'placeItems': value => `place-items-${value}`,
  'placeSelf': value => `place-${value}`,
  'padding': value => value.indexOf("-") > -1 ? `p${value}` : `p-${value}`,
  'px': value => `px-${value}`,
  'py': value => `py-${value}`,
  'pt': value => `pt-${value}`,
  'pr': value => `pr-${value}`,
  'pb': value => `pb-${value}`,
  'pl': value => `pl-${value}`,
  'margin': value => value.indexOf("-") > -1 ? `m${value}` : `m-${value}`,
  'mx': value => value < 0 ? `-mx-${value}` : `mx-${value}`,
  'my': value => value < 0 ? `-my-${value}` : `my-${value}`,
  'mt': value => value < 0 ? `-mt-${value}` : `mt-${value}`,
  'mr': value => value < 0 ? `-mr-${value}` : `mr-${value}`,
  'mb': value => value < 0 ? `-mb-${value}` : `mb-${value}`,
  'ml': value => value < 0 ? `-ml-${value}` : `ml-${value}`,
  'space': value => `space-${value}`,
  'spaceNegative': value => `-space-${value}`,
  'spaceX': value => value < 0 ? `-space-x-${value}` : `space-x-${value}`,
  'spaceY': value => value < 0 ? `-space-y-${value}` : `space-y-${value}`,
  'spaceReverse': value => `space-${value}-reverse`,
  'w': value => `w-${value}`,
  'minW': value => `min-w-${value}`,
  'maxW': value => `max-w-${value}`,
  'h': value => `h-${value}`,
  'minH': value => `min-h-${value}`,
  'maxH': value => `max-h-${value}`,
  'font': value => `font-${value}`,
  'fontSize': value => `text-${value}`,
  'fontFamily': value => `font-${value}`,
  'fontWeight': value => `font-${value}`,
  'text': value => `text-${value}`,
  'textAlignment': value => `text-${value}`,
  'textColor': value => `text-${value}`,
  'textOpacity': value => `text-opacity-${value}`,
  'textDecoration': value => value,
  'textTransform': value => value,
  'fontSmoothing': value => value,
  'fontVariantNumeric': value => value,
  'fontStyle': value => value,
  'tracking': value => `tracking-${value}`,
  'leading': value => `leading-${value}`,
  'align': value => `align-${value}`,
  'whitespace': value => `whitespace-${value}`,
  'wordBreak': value => value,
  'listStyleType': value => value,
  'listStylePosition': value => value,
  'placeholderColor': value => `placeholder-${value}`,
  'placeholderOpacity': value => `placeholder-opacity-${value}`,
  'background': value => `bg-${value}`,
  'backgroundAttachment': value => `bg-${value}`,
  'backgroundClip': value => `bg-clip-${value}`,
  'backgroundColor': value => `bg-${value}`,
  'backgroundColour': value => `bg-${value}`,
  'backgroundOpacity': value => `bg-opacity-${value}`,
  'backgroundPosition': value => `bg-${value}`,
  'backgroundSize': value => `bg-${value}`,
  'backgroundImage': value => `bg-${value}`,
  'backgroundGradient': value => `bg-gradient-to-${value}`,
  'backgroundGradientFrom': value => `from-${value}`,
  'from': value => `from-${value}`,
  'backgroundGradientTo': value => `to-${value}`,
  'to': value => `to-${value}`,
  'rounded': value => value === true ? 'rounded' : `rounded-${value}`,
  'border': value => value === true ? 'border' : `border-${value}`,
  'divideColor': value => `divide-${value}`,
  'divideOpacity': value => `divide-opacity-${value}`,
  'divideStyle': value => `divide-${value}`,
  'divideWidth': value => `divide-${value}`,
  'divide': value => `divide-${value}`,
  'borderWidth': value => `border-${value}`,
  'borderColor': value => `border-${value}`,
  'borderCollapse': value => `border-${value}`,
  'table': value => `table-${value}`,
  'shadow': value => value === true ? 'shadow' : `shadow-${value}`,
  'opacity': value => `opacity-${value}`,
  'transition': value => value === true ? 'transition' : `transition-${value}`,
  'duration': value => `duration-${value}`,
  'ease': value => `ease-${value}`,
  'delay': value => `delay-${value}`,
  'animate': value => `animate-${value}`,
  'scale': value => `scale-${value}`,
  'rotate': value => value < 0 ? `-rotate-${value}` : `rotate-${value}`,
  'translate': value => value < 0 ? `-translate-${value}` : `translate-${value}`,
  'translateX': value => value < 0 ? `-translate-x-${value}` : `translate-x-${value}`,
  'translateY': value => value < 0 ? `-translate-y-${value}` : `translate-y-${value}`,
  'skew': value => value < 0 ? `-skew-${value}` : `skew-${value}`,
  'skewX': value => value < 0 ? `-skew-x-${value}` : `skew-x-${value}`,
  'skewY': value => value < 0 ? `-skew-y-${value}` : `skew-y-${value}`,
  'origin': value => `origin-${value}`,
  'appearance': value => `appearance-${value}`,
  'cursor': value => `cursor-${value}`,
  'outline': value => `outline-${value}`,
  'pointerEvents': value => `pointer-events-${value}`,
  'resize': value => value === true ? 'resize' : `resize-${value}`,
  'select': value => `select-${value}`,
  'fill': value => `fill-${value}`,
  'stroke': value => `stroke-${value}`,
  'srOnly': value => 'sr-only',
  'notSrOnly': value => 'not-sr-only',
  'prose': value => value === true ? 'prose' : `prose-${value}`,
}

export default propsMap;