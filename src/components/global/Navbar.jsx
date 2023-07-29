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
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-scroll';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 250;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',color: 'black', backgroundColor : 'black'  }}>
      <List>
        
          <ListItem  disablePadding sx={{ backgroundColor : 'black'}}>
          <Link 
            to='about'
            spy={true} smooth={true} offset={0} duration={500} 
            style={{ textDecoration : 'none' , color : '#f5f5f5'}}
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="About" />
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem  disablePadding sx={{ backgroundColor : 'black'}}>
          <Link 
            to='skills'
            spy={true} smooth={true} offset={-50} duration={500}
            style={{ textDecoration : 'none' , color : '#f5f5f5'}}
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Skills" />
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem  disablePadding sx={{ backgroundColor : 'black'}}>
          <Link 
            to='projects'
            spy={true} smooth={true} offset={-50} duration={500}
            style={{ textDecoration : 'none' , color : '#f5f5f5'}}
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem  disablePadding sx={{ backgroundColor : 'black'}}>
          <Link 
            to='contact' 
            spy={true} smooth={true} offset={-120} duration={500}
            style={{ textDecoration : 'none' , color : '#f5f5f5'}}
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </Link>
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
        // sx={{ backgroundColor : "#f5f5f5"}}
        color='transparent'
      >
        <Toolbar sx={{ color : 'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } , color : 'black'}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none',sm: 'block' } , color : 'rgba(135,255,245,1)'}}
          >
              PG
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Link to='about' spy={true} smooth={true} offset={0} duration={500}>
              <Button 
                sx={{ 
                  color: 'white',
                  ":hover" : {
                    color : 'rgba(135,255,245,1)'
                  }
                }}
              >
                About
              </Button>
            </Link>

            <Link to='skills' spy={true} smooth={true} offset={-60} duration={500}>
              <Button 
                sx={{ 
                  color: 'white',
                  ":hover" : {
                    color : 'rgba(135,255,245,1)'
                  }
                }}
              >
                Skills
              </Button>
            </Link>

            <Link to='projects' spy={true} smooth={true} offset={-100} duration={500}>
              <Button 
                sx={{ 
                  color: 'white',
                  ":hover" : {
                    color : 'rgba(135,255,245,1)'
                  }
                }}
              >
                Projects
              </Button>
            </Link>

            <Link to='contact' spy={true} smooth={true} offset={-80} duration={500}>
              <Button 
                sx={{ 
                  color: 'white',
                  ":hover" : {
                    color : 'rgba(135,255,245,1)'
                  }
                }}
              >
                Contact
              </Button>
            </Link>
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
