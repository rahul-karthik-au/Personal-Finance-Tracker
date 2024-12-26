import  React, { useState } from 'react';
import { AppBar, 
         Box, 
         Toolbar, 
         Typography,  
         Divider, 
         Drawer, 
         List, 
         ListItem, 
         ListItemButton, 
         ListItemIcon, 
         ListItemText,
         IconButton,
         Menu,
         MenuItem
        } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SettingsIcon from '@mui/icons-material/Settings';
import Home from '../Components/Home';
import QuickAdd from '../Components/QuickAdd';

function Header() {
  const [openSideBar,setOpenSideBar]=useState(true)
  const [menuOpen,setMenuOpen]=useState(false)
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  function handleOpen(){
    console.log("Click open")
    console.log(isQuickAddOpen);
    setIsQuickAddOpen(true);
    console.log(isQuickAddOpen)}
  function handleClose(){
    console.log("clicked close"); 
    setIsQuickAddOpen(false);
    console.log(isQuickAddOpen)}
  const handleSideBar = () =>{setOpenSideBar(!openSideBar)}
  const handleProfileMenuOpen = ()=>{setMenuOpen(!menuOpen)}
  function handleClick(text:String){
    console.log(text)
  }

  return (
    <>
    <Box sx={{ display: 'flex', flexGrow:1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleSideBar}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            PFT
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" onClick={handleOpen}>
              <AddBoxIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ mt: '45px','& .MuiMenu-paper': {
          backgroundColor: '#fefff0', 
          color: '#a89532',
        }}}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              color="inherit"
              open={menuOpen}
              onClose={handleProfileMenuOpen}
            >
              {["Logout"].map((setting) => (
                <MenuItem key={setting} onClick={()=>handleClick("Logout")}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        sx={{
          width: '200px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
          backgroundColor: '#fefff0', 
          color: '#a89532',
        }, 
        }}
        open={openSideBar}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto'}}>
          <List>
            {['Home','Quick Adds'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                sx={{
                  color: '#826f21',
                  backgroundColor: '#fefff0',
                  '&:hover': {
                    backgroundColor: '#cfbd48',
                  },
                }}
                onClick={()=>handleClick(text)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <AddIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Views', 'Settings', 'Logout'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                sx={{
                  color: '#826f21',
                  backgroundColor: '#fefff0',
                  '&:hover': {
                    backgroundColor: '#cfbd48',
                  },
                }}
                onClick={()=>handleClick(text)}>
                  <ListItemIcon>
                    {index === 0 ? <ViewQuiltIcon /> : index ===1?<SettingsIcon />:<LogoutIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
    <QuickAdd open={isQuickAddOpen} onClose={handleClose} />
    <Home />
    </>
  )
}

export default Header