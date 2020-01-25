import React from 'react';
import Play from './Play';
import Stop from './Stop';
import Tempo from './Tempo';

export default function MasterControls() {
  return (
    <>
      {/* Do play & stop need to be separate? TBD, but I suspect no */}
      <Play />
      <Stop />
      <Tempo />
    </>
  );
}