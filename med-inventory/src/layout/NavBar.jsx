import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HelpIcon from "@material-ui/icons/Help";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import HomeIcon from "@material-ui/icons/Home";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import SearchIcon from "@material-ui/icons/Search";

import Home from "../components/Home";
import AddMedicine from "../components/add-medicine/AddMedicine";
import SearchMedicine from "../components/search-medicine/SearchMedicine";
import UploadData from "../components/upload-data/UploadData";
import { Router } from "@reach/router";
import { Link } from "@reach/router";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding :"0px",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 13
  },
  logoDrawerImageOpen:{
    height: "50px",
    marginLeft : 10
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    ...theme.mixins.toolbar
  },
  toolBarFont :{
     fontFamily : "sans-serif",
     paddingTop  : "15px",
     fontWeight : "bold"
   },
  toolbarStart:{
    display : "flex",
    alignItems : "end",
    justifyContent : "flex-start",
    width :"50vw"
  },
  toolbarEnd:{
    display : "flex",
    alignItems : "end",
    justifyContent : "flex-end",
    width :"50vw"
  },
  profileImage:{
    width:"50px",
    height:"50px",
    marginLeft:20
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
            <div className={classes.toolbarStart}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open
                  })}
                >
              <MenuIcon />
              </IconButton>
              <span className={clsx(classes.toolBarFont, {[classes.hide] : open})}>KK Siddha Medicines</span>
            </div>
            <div className={classes.toolbarEnd}>
              <IconButton
                color="inherit"
                aria-label="Help"
                edge="start"
                >
              <HelpIcon />
              </IconButton>
              <img className={classes.profileImage} src= "/images/person_white_image.png" alt="profile" />
            </div>  
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
        <img className={classes.logoDrawerImageOpen} src= "/images/siddha.jpg" alt="logo" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ListItem button key="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <ListItem button key="Search">
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </Link>
          <Link to="/sales" style={{ textDecoration: "none" }}>
            <ListItem button key="Sales">
              <ListItemIcon>
                <AddShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Sales" />
            </ListItem>
          </Link>
          <Link to="/purchase" style={{ textDecoration: "none" }}>
            <ListItem button key="Purchase">
              <ListItemIcon>
                <AddToQueueIcon />
              </ListItemIcon>
              <ListItemText primary="Purchase" />
            </ListItem>
          </Link>
          <Link to="/add-medicine" style={{ textDecoration: "none" }}>
            <ListItem button key="Add Medicine">
              <ListItemIcon>
                <LibraryAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Medicine" />
            </ListItem>
          </Link>
          {props.user.email === "jkkr.1996@gmail.com" ? (
            <Link to="/upload-data" style={{ textDecoration: "none" }}>
              <ListItem button key="Upload Data">
                <ListItemIcon>
                  <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Upload Data" />
              </ListItem>
            </Link>
          ) : null}
          <ListItem onClick={props.signOut} button key="Log Out">
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router>
          <Home user={props.user} path="/" />
          <AddMedicine path="/add-medicine" />
          <SearchMedicine path="/search" />
          <UploadData path="/upload-data" />
        </Router>
      </main>
    </div>
  );
}
