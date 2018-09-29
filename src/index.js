import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes  from "prop-types";
import './style.css';

class AutoComplete extends React.Component{

	// static propTypes = {
	// 	suggestions : PropTypes.instanceOf(Array)
	// };

	// static defaultProps = {
	// 	suggestions: []
	// };

	constructor(props){
		super(props)
		
		this.state = {

			activeSuggestion    : 0,
			filteredSuggestions : [],
			showSuggestions     : false,
			userInput           : "",
			showDropdown        : false

		}

		this.onChange  = this.onChange.bind(this)
		this.onClick   = this.onClick.bind(this)
		this.dropdown  = this.dropdown.bind(this)
		this.OnKeyDown = this.OnKeyDown.bind(this)
	}

	OnKeyDown(e){
    
    	const { activeSuggestion, filteredSuggestions,showDropdown } = this.state;
    	const { suggestions } = this.props; 

	    if (e.keyCode === 13) {

	    showDropdown?
	      this.setState({
	        activeSuggestion: 0,
	        showSuggestions: false,
	        userInput: suggestions[activeSuggestion]
	      })
	    :
	     this.setState({
	        activeSuggestion: 0,
	        showSuggestions: false,
	        userInput: filteredSuggestions[activeSuggestion]
	      })
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
	  };


	onClick (event) {

	    this.setState({
	      activeSuggestion: 0,
	      filteredSuggestions: [],
	      showSuggestions: false,
	      userInput: event.currentTarget.innerText,
	      showDropdown: false
	    });

	    this.props.SetValue(event.currentTarget.innerText)
	 };


	onChange(event){

		const { suggestions } = this.props;
    	const userInput = event.target.value;

    	const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

    	this.setState({
	      activeSuggestion: 0,
	      filteredSuggestions,
	      showSuggestions: true,
	      userInput: event.currentTarget.value,
	      showDropdown: false,
	    });
	}

	dropdown(){
		const {showDropdown} = this.state
		this.setState({
			showDropdown: !showDropdown
		})
	}

	render(){

	 const { onChange, onClick,OnKeyDown, reset,dropdown, state: {activeSuggestion,filteredSuggestions,showSuggestions,userInput,showDropdown } } = this;
	 const { suggestions } = this.props;

	 let suggestionsListComponent;

	 if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        
        suggestionsListComponent = (
          
          <ul className="suggestions" >
            
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className= {className} key={suggestion} onClick={onClick} >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
	        <ul className = "suggestions">
	           <li>
		           No suggestions!
		       </li>
		    </ul>
        );
      }
    }

    if(showDropdown){

    	suggestionsListComponent = (
          
          <ul className="suggestions">
            
            {suggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className= {className} key={suggestion} onClick={onClick} >
                  	{suggestion}
                </li>
              );
            })}
          </ul>
        );
    }
    
	 return(
		 <div>
		 	 <div>
				<input type="text" onChange = {onChange} value = {userInput} onFocus= {dropdown} onKeyDown={(e) => {OnKeyDown(e)}}/>
	
				 {suggestionsListComponent}
			 </div>
		 </div>
		)
	}
}

export default AutoComplete