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
* [API]

## Installation
To Install Use [NPM](https://npmjs.org/)

    $ npm i autocomplete-dropdown

## Examples

![Alt Text](https://github.com/divyanshu-rawat/AutoComplete/blob/master/Example/dropdown.gif)

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


## API
Props

> suggestions: Array
The items to display in the dropdown menu.

> SetValue: Function

Default value: function() {}

Arguments: value: String, item: Any

Invoked when the user selects an item from the dropdown menu.


You can run in a local development server using `npm start`.

