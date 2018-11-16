import React, { Fragment } from 'react';

const Work = ({ title }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
    </Fragment>
  );
};

export default function Works({ works }) {
  return (
    <Fragment>
      {works.map(work => <Work key={work.id} title={work.title} />)}
    </Fragment>
  );
}
