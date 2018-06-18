import React, { Component as C } from 'react';
import { render as r } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import Counter from './Counter';

class App extends C {
  constructor() {
    super();
    this.state = { Day: 3 };
  }
  render() {
    return (
      <div><Counter stars={this.state.Day} />
        <DatePicker
          onChange={(n = null, date) => {
            const Day = Number( moment(date).format('DD') );
            this.setState({ Day });
          	}
          }
          floatingLabelText="Выберите дату"
        />
      </div>);
  }
}

r(
	<MuiThemeProvider><App /></MuiThemeProvider>,
	document.querySelector('.cont'),
);