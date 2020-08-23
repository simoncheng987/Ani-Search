import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponents/SearchBar';
import MediaGrid from './Components/MediaGridComponents/MediaGrid';
import { IUserInput } from './Common/Interfaces';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "initial d",
    // StartDate: new Date('2014-08-18T21:11:54'),
    // EndDate: new Date('2018-08-18T21:11:54'),
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
        <MediaGrid SearchQuery={UserInput.SearchQuery}  />
        {/* <MediaGrid SearchQuery={UserInput.SearchQuery} StartDate={UserInput.StartDate} EndDate={UserInput.EndDDate} /> */}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
