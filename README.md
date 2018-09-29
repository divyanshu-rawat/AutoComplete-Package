# AutoComplete-Package
A autocomplete component for react-application.

React.js AutoComplete Component! (WIP!)


Accessible, extensible, Autocomplete for React.js.

```js

<AutoComplete suggestions={['a','b']} SetValue={value => this.setState({ value: value})} />

```

## Table of Contents

* [Installation](#installation)
* [Examples](#examples)

## Installation
To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm i react-app-autocomplete


Or Prefer cloning from here as npm version as of now lack's CSS

## Examples

Here is a simple example of autocomplete being used in an app with some custom styles and focusable input elements within the autocomplet context.

```js

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    let data_set = data;
    const {
      state: { value }
    } = this;

    return (
      <div className="">
        <div className="">
          <AutoComplete
            suggestions={data_set}
            SetValue={value => this.setState({ value: value })}
          />
        </div>

        {value != "" && (
          <div className="">
            <strong>Selected Value:</strong> <p>{value}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;




```


You can run in a local development server using `npm start` or `yarn run start`.

