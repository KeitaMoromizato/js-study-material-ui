import React, { Component } from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem} from 'material-ui/List';

import './app.styl';

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          name: 'hoge',
          contents: 'huga'
        },
        {
          name: 'aaa',
          contnets: 'aaaa'
        }
      ]
    };
  }

  renderListItem(item) {
    return (
      <ListItem
        key={item.name}
        primaryText={item.name}
        onTouchTap={() => {
          console.log(item);
        }}
        ></ListItem>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div id="page">
        <AppBar title={"Material UI Test"} ></AppBar>
          <List>
            { this.state.items.map(item => this.renderListItem(item) ) }
          </List>
        </div>
      </MuiThemeProvider>
    )
  }
}

render(<App />, document.getElementById('app'));
