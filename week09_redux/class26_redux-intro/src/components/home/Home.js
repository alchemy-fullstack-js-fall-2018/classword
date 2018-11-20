import React from 'react';
import AllNotes from '../../containers/notes/AllNotes';
import HiNotes from '../../containers/notes/HiNotes';

export default function Home() {
  return (
    <div>
      <div>
        <AllNotes />
      </div>

      <div>
        <HiNotes />
      </div>
    </div>
  );
}
