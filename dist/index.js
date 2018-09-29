'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoComplete = function (_React$Component) {
		_inherits(AutoComplete, _React$Component);

		// static propTypes = {
		// 	suggestions : PropTypes.instanceOf(Array)
		// };

		// static defaultProps = {
		// 	suggestions: []
		// };

		function AutoComplete(props) {
				_classCallCheck(this, AutoComplete);

				var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

				_this.state = {

						activeSuggestion: 0,
						filteredSuggestions: [],
						showSuggestions: false,
						userInput: "",
						showDropdown: false

				};

				_this.onChange = _this.onChange.bind(_this);
				_this.onClick = _this.onClick.bind(_this);
				_this.dropdown = _this.dropdown.bind(_this);
				_this.OnKeyDown = _this.OnKeyDown.bind(_this);
				return _this;
		}

		_createClass(AutoComplete, [{
				key: 'OnKeyDown',
				value: function OnKeyDown(e) {
						var _state = this.state,
						    activeSuggestion = _state.activeSuggestion,
						    filteredSuggestions = _state.filteredSuggestions,
						    showDropdown = _state.showDropdown;
						var suggestions = this.props.suggestions;


						if (e.keyCode === 13) {

								showDropdown ? this.setState({
										activeSuggestion: 0,
										showSuggestions: false,
										userInput: suggestions[activeSuggestion]
								}) : this.setState({
										activeSuggestion: 0,
										showSuggestions: false,
										userInput: filteredSuggestions[activeSuggestion]
								});
						}

						// User pressed the up arrow
						else if (e.keyCode === 38) {
										if (activeSuggestion === 0) {
												return;
										}

										this.setState({ activeSuggestion: activeSuggestion - 1 });
								}
								// User pressed the down arrow
								else if (e.keyCode === 40) {

												if (activeSuggestion === suggestions.length) {
														this.setState({ activeSuggestion: 0 });
														return;
												}

												this.setState({ activeSuggestion: activeSuggestion + 1 });
										}
				}
		}, {
				key: 'onClick',
				value: function onClick(event) {

						this.setState({
								activeSuggestion: 0,
								filteredSuggestions: [],
								showSuggestions: false,
								userInput: event.currentTarget.innerText,
								showDropdown: false
						});

						this.props.SetValue(event.currentTarget.innerText);
				}
		}, {
				key: 'onChange',
				value: function onChange(event) {
						var suggestions = this.props.suggestions;

						var userInput = event.target.value;

						var filteredSuggestions = suggestions.filter(function (suggestion) {
								return suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
						});

						this.setState({
								activeSuggestion: 0,
								filteredSuggestions: filteredSuggestions,
								showSuggestions: true,
								userInput: event.currentTarget.value,
								showDropdown: false
						});
				}
		}, {
				key: 'dropdown',
				value: function dropdown() {
						var showDropdown = this.state.showDropdown;

						this.setState({
								showDropdown: !showDropdown
						});
				}
		}, {
				key: 'render',
				value: function render() {
						var onChange = this.onChange,
						    onClick = this.onClick,
						    OnKeyDown = this.OnKeyDown,
						    reset = this.reset,
						    dropdown = this.dropdown,
						    _state2 = this.state,
						    activeSuggestion = _state2.activeSuggestion,
						    filteredSuggestions = _state2.filteredSuggestions,
						    showSuggestions = _state2.showSuggestions,
						    userInput = _state2.userInput,
						    showDropdown = _state2.showDropdown;
						var suggestions = this.props.suggestions;


						var suggestionsListComponent = void 0;

						if (showSuggestions && userInput) {
								if (filteredSuggestions.length) {

										suggestionsListComponent = _react2.default.createElement(
												'ul',
												{ className: 'suggestions' },
												filteredSuggestions.map(function (suggestion, index) {
														var className = void 0;

														if (index === activeSuggestion) {
																className = "suggestion-active";
														}

														return _react2.default.createElement(
																'li',
																{ className: className, key: suggestion, onClick: onClick },
																suggestion
														);
												})
										);
								} else {
										suggestionsListComponent = _react2.default.createElement(
												'ul',
												{ className: 'suggestions' },
												_react2.default.createElement(
														'li',
														null,
														'No suggestions!'
												)
										);
								}
						}

						if (showDropdown) {

								suggestionsListComponent = _react2.default.createElement(
										'ul',
										{ className: 'suggestions' },
										suggestions.map(function (suggestion, index) {
												var className = void 0;

												if (index === activeSuggestion) {
														className = "suggestion-active";
												}

												return _react2.default.createElement(
														'li',
														{ className: className, key: suggestion, onClick: onClick },
														suggestion
												);
										})
								);
						}

						return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
										'div',
										null,
										_react2.default.createElement('input', { type: 'text', onChange: onChange, value: userInput, onFocus: dropdown, onKeyDown: function onKeyDown(e) {
														OnKeyDown(e);
												} }),
										suggestionsListComponent
								)
						);
				}
		}]);

		return AutoComplete;
}(_react2.default.Component);

exports.default = AutoComplete;