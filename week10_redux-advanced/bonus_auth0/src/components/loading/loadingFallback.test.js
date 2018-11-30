import { loadingFallback } from './loadingFallback';

describe('loadingFallback', () => {
  it('returns a loading component when loading', () => {
    const props = { loading: true };
    const LoadingComponent = jest.fn();
    const Component = jest.fn();

    const FallbackComponent = loadingFallback(LoadingComponent)(Component);

    FallbackComponent(props);

    expect(LoadingComponent.mock.calls).toHaveLength(1);
    expect(Component.mock.calls).toHaveLength(0);
  });

  it('returns a Component when not loading', () => {
    const props = { loading: false };
    const LoadingComponent = jest.fn();
    const Component = jest.fn();

    const FallbackComponent = loadingFallback(LoadingComponent)(Component);

    FallbackComponent(props);

    expect(Component.mock.calls).toHaveLength(1);
    expect(LoadingComponent.mock.calls).toHaveLength(0);
  });
});
