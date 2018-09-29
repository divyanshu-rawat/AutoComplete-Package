
import React from 'react';
import { render} from 'react-dom';
import AutoComplete from '../../src';

const App = () => (
    <AutoComplete suggestions={['Divyanshu','Alex','David','Fred','Julia','Mark','Fabian','Carlos','George','Tom','Nick']} />
);

render(<App />, document.getElementById("root"));