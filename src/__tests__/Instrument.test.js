import React from 'react';
import renderer from 'react-test-renderer';
import Instrument from '../components/Instrument';

{/* I'm adding minimal testing to this app mostly because of time constraints,
 /* but I do think tests are really important!! I''ll add some notes to the 
 /* Readme at the end of this exercise to explain the types of tests each component
 /* should have as the app grows in complexity, but for now this just tests that the
 /* Instrument component renders correctly */}

jest.mock('../components/Beat', () => () => 'beat');
const props = {
    totalBeats: [1,2,3,4],
    instrumentName: "xylophone"
} 

it('correctly renders Instrument component', () => {  
    const InstrumentComponent = renderer.create(<Instrument {...props}/>).toJSON();
    expect(InstrumentComponent).toMatchSnapshot();
});