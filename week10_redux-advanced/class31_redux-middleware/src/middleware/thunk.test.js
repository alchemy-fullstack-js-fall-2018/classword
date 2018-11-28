import { thunk } from './thunk';

describe('thunk middleware', () => {


  it('calls next with the dispatched action if action is not a function', () => {
    const store = {
      dispatch: jest.fn(),
      getState: jest.fn()
    };

    const next = jest.fn();

    thunk(store)(next)({ type: 'SOME_ACTION' });

    expect(next.mock.calls[0][0]).toEqual({ type: 'SOME_ACTION' });
  });

  it('calls action with dispatch and getState if it is a function', () => {
    const store = {
      dispatch: jest.fn(),
      getState: jest.fn()
    };

    const next = jest.fn();

    const action = jest.fn();

    thunk(store)(next)(action);

    expect(next.mock.calls).toHaveLength(0);
    expect(action.mock.calls[0][0]).toBe(store.dispatch);
    expect(action.mock.calls[0][1]).toBe(store.getState);

  });
});
