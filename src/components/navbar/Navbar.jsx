import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';

const Navbar = () => {
  const {isLoggedIn} = React.useContext(Context)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAccountClose = () => {
    setAnchorEl(null);
    navigate('/signin')
  };
  const handleLogout = () => {
    handleAccountClose();
  };
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography className="title" variant="h6" noWrap>
            My Books
          </Typography>
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              className="input"
            />
          </div>
          <Button
            className="addButton"
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
          >
            Add Book
          </Button>
          <div>
            <Button
              onClick={handleAccountClick}
              startIcon={<AccountCircleIcon />}
              color="inherit"
            >
              {isLoggedIn ? 'John Doe' : 'Login'}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleAccountClose}
            >
              {isLoggedIn ? (
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              ) : (
                <MenuItem onClick={handleAccountClose}>Login</MenuItem>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

