import { AppBar, Toolbar, Typography, Icon } from '@mui/material';
import './App.scss';
import Blogs from './Blogs';

function App() {
  return (<>
    <AppBar position="static" component="header">
      <Toolbar className="header">
        <Icon>quiz</Icon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Frontend developer test assignment
        </Typography>
      </Toolbar>
    </AppBar>
    <main className="main">
      <Blogs />
    </main>
  </>);
}

export default App;
