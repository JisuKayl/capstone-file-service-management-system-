import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ComputerIcon from "@mui/icons-material/Computer";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import DescriptionIcon from "@mui/icons-material/Description";
import CampaignIcon from "@mui/icons-material/Campaign";

import Logo from "../assets/Baliuag_University_logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Routes, Route } from "react-router-dom";
// import DashboardPage from "../pages/Dashboard/Dashboard.jsx";
// import AnnouncementPage from "../pages/Announcement/Announcement.jsx";
// import RoomReservationPage from "../pages/Room Reservation/RoomReservation.jsx";
// import EquipmentReservationPage from "../pages/Equipment Reservation/EquipmentReservation.jsx";
// import LostAndFoundPage from "../pages/Lost and Found/LostAndFound.jsx";
// import FormsPage from "../pages/Forms/Forms.jsx";
// import InboxPage from "../pages/Inbox/Inbox.jsx";

// import Announcementdetails from "../pages/Announcement/Announcement2.jsx";

// import BookRoom from "../pages/Room Reservation/BookRoom/BookRoom.jsx";
// import CreateRoom from "../pages/Room Reservation/CreatingRoom/CreatingRoom.jsx"
// import ViewRequest from "../pages/Room Reservation/ViewRequest/RequestRoom.jsx"
// import ViewRoom from "../pages/Room Reservation/ViewRoom/ViewRoom.jsx"

// import BorrowEquip from "../pages/Equipment Reservation/BorrowEquipment/BorrowEquip.jsx"
// import CreateEquip from "../pages/Equipment Reservation/CreatingRequest/Create.jsx"
// import ViewEquip from "../pages/Equipment Reservation/ViewEquipment/ViewEquipment.jsx"
// import ViewRequestEquip from "../pages/Equipment Reservation/ViewRequest/ViewRequest.jsx"

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminAppBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [notificationCount, setNotificationCount] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  let navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="Logo" style={{ height: 30, marginRight: 10 }} />
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
            UniServe
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            aria-label="show new notifications"
            color="inherit"
            onClick={() => {
              setNotificationCount(notificationCount + 1);
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                navigate("/login");
                handleMenuClose();
              }}
            >
              Logout
              <ListItemIcon sx={{ marginLeft: "auto" }}></ListItemIcon>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              text: "Dashboard",
              icon: <DashboardIcon />,
              path: "/",
              action: "route",
            },
            {
              text: "Announcement",
              icon: <CampaignIcon />,
              path: "/announcement",
              action: "route",
            },
            {
              text: "Room Reservation",
              icon: <MeetingRoomIcon />,
              path: "/room-reservation",
              action: "route",
            },
            {
              text: "Equipment Reservation",
              icon: <ComputerIcon />,
              path: "/equipment-reservation",
              action: "route",
            },

            {
              text: "Forms",
              icon: <DescriptionIcon />,
              path: "/forms",
              action: "route",
            },
            {
              text: "Inbox",
              icon: <MailIcon />,
              path: "/inbox",
              action: "route",
            },
          ].map(({ text, icon, path, action }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={action === "route" ? Link : undefined} // Conditionally set component
                to={action === "route" ? path : undefined}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor:
                    location.pathname === path ? "#D3D3D3" : "transparent",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 1.3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem" }}>
        <Routes>
          {/* <Route path="/" element={<DashboardPage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="/room-reservation" element={<RoomReservationPage />} />
          <Route
            path="/equipment-reservation"
            element={<EquipmentReservationPage />}
          />
          <Route path="/lost-and-found" element={<LostAndFoundPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/inbox" element={<InboxPage />} />

          <Route path="/announcement/details" element={<Announcementdetails />} /> */}
        </Routes>
      </Box>
    </Box>
  );
}
