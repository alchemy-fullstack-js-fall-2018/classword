import React from 'react';

export default reactMemo(function Func({ title }) {
  console.log('Func', 'Component rendered');
  return (
    <h1>Func - {title}</h1>
  );
});

function reactMemo(Component) {
  let previousProps = null;
  let previousRender = null;

  return function MemoizedComponent() {
    const args = [...arguments];
    const [props] = args;
    if(reactPropsEquality(previousProps, props)) return previousRender;

    const render = <Component {...props} />;
    previousRender = render;
    previousProps = props;
    return render;
  };
}

function reactPropsEquality(previousProps, props) {
  if(previousProps) {
    return Object.keys(previousProps).every(propName => {
      return previousProps[propName] === props[propName];
    });
  }

  return false;
}
