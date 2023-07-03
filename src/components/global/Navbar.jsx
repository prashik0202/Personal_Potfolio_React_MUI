import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "react-anchor-link-smooth-scroll";

const drawerWidth = 250;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',color: '#00e676'  }}>
      <List>
        
          <ListItem  disablePadding>
          <AnchorLink href='#about' style={{ textDecoration : 'none' , color : '#00e676'}}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="About" />
            </ListItemButton>
          </AnchorLink>
          </ListItem>

          <ListItem  disablePadding>
          <AnchorLink href='#skills' style={{ textDecoration : 'none' , color : '#00e676'}}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Skills" />
            </ListItemButton>
          </AnchorLink>
          </ListItem>

          <ListItem  disablePadding>
          <AnchorLink href='#projects' style={{ textDecoration : 'none' , color : '#00e676'}}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </AnchorLink>
          </ListItem>

          <ListItem  disablePadding>
          <AnchorLink href='#about' style={{ textDecoration : 'none' , color : '#00e676'}}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </AnchorLink>
          </ListItem>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box >
      <AppBar 
        component="nav" 
        elevation={0} 
        sx={{ backgroundColor : "#121212"}}
      >
        <Toolbar sx={{ color : '#00e676'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } , color : '#00e676'}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none',sm: 'block' } }}
          >
            Prashik Gamre
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <AnchorLink href='#about'>
              <Button 
                sx={{ color: '#00e676' }}
              >
                About
              </Button>
            </AnchorLink>

            <AnchorLink href='#skills'>
              <Button 
                sx={{ color: '#00e676' }}
              >
                Skills
              </Button>
            </AnchorLink>

            <AnchorLink href='#projects'>
              <Button 
                sx={{ color: '#00e676' }}
              >
                Projects
              </Button>
            </AnchorLink>

            <AnchorLink href='#about'>
              <Button 
                sx={{ color: '#00e676' }}
              >
                Contact
              </Button>
            </AnchorLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Navbar;
