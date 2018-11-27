import React, { Fragment } from 'react';
import SearchContainer from '../../containers/search/SearchContainer';
import DisplayContainer from '../../containers/display/DisplayContainer';
import ColorContainer from '../../containers/search/ColorContainer';
import BackgroundColorConatiner from '../../containers/search/BackgroundColorConatiner';

export default function App() {
  return (
    <Fragment>
      <SearchContainer />
      <ColorContainer />
      <BackgroundColorConatiner />
      <DisplayContainer />
    </Fragment>
  );
}
