import React from 'react';
import renderer from 'react-test-renderer';
import Beat from '../components/Beat';

{/* See note in Instrument.test.js about testing.
 /* The below checks that the beat component is rendered correctly. */}

 const props = {
    key: 0,
    isActive: true,
    position: 0,
    currPosition: 1
  } 
  
  it('correctly renders Beat component', () => {  
      const BeatComponent = renderer.create(<Beat {...props}/>).toJSON();
      expect(BeatComponent).toMatchSnapshot();
  });