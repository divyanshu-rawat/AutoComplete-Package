
import React from 'react';
import { render} from 'react-dom';
import MyComponent from '../../src';


const App = () => (
    <MyComponent suggestions = {['alex','bob','divyanshu','mark','fred','tom','niel','patrick','tony']}/>
);
render(<App />, document.getElementById("root"));