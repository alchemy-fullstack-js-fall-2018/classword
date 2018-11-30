import Loading from './Loading';

export const loadingFallback = LoadingComponent => Component => {
  return function LoadingFallbackComponent(props) {
    if(props.loading) {
      return LoadingComponent(props);
    }

    return Component(props);
  };
};

export const loadingWithParagraph = loadingFallback(Loading);
