import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: white;
  border-width: 10px;
  border-color: rgba(47, 56, 84, 0);
  border-radius: 60px;
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: #2f3854;
  padding: 0.3em 1em;
  width: 350px;
  margin: 1rem 0;

  @media (max-width: 767px) {
    width: 240px;
    font-size: 0.75rem;
  }
`;

const SuggestionList = styled.ul`
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  overflow-y: auto;
  padding-left: 0;
  width: calc(350px + 3rem);
  font-size: 1rem;

  @media (max-width: 767px) {
    width: calc(240px + 3rem);
    font-size: 0.75rem;
  }
`;

const SuggestionItem = styled.li`
  padding: 0.5rem;
  border-radius: 40px;
  
  &:hover {
    background-color: #afb8d3;
    color: white;
    cursor: pointer;
    font-weight: 500;
  }
`;

const SuggestionItemActive = styled.li`
padding: 0.5rem;
  background-color: #afb8d3;
  color: white;
  cursor: pointer;
  font-weight: 500;
border-radius: 40px;

`;

const NoSuggestions = styled.div`
  color: #999;
  padding: 0.5rem;
`;

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
    };
  }

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <SuggestionList>
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                return (
                  <SuggestionItemActive
                    className={className}
                    key={suggestion}
                    onClick={onClick}
                  >
                    {suggestion}
                  </SuggestionItemActive>
                );
              }

              return (
                <SuggestionItem
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </SuggestionItem>
              );
            })}
          </SuggestionList>
        );
      } else {
        suggestionsListComponent = (
          <NoSuggestions>
            <em>No suggestions.</em>
          </NoSuggestions>
        );
      }
    }

    return (
      <Fragment>
        <Input
          type='text'
          placeholder='Start typing'
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
