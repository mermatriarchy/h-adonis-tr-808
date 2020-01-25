import React from 'react';
import renderer from 'react-test-renderer';
import Beat from '../components/Beat';

{/* See note in Instrument.test.js about testing.
 /* The below checks that the beat component is rendered correctly. */}

it('correctly renders Beat component', () => {  
    const BeatComponent = renderer.create(<Beat />).toJSON();
    expect(BeatComponent).toMatchSnapshot();
});