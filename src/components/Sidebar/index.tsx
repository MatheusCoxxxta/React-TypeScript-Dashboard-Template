import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./style.css";
import { ListItemIcon } from "@material-ui/core";
import { Arrow } from "./styled";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";

const Sidebar = (props: { title: string }) => {
  const { title } = props;

  return (
    <div className="sidebar">
      <ListItem className="title" button>
        <ListItemIcon>
          <DashboardRoundedIcon />
        </ListItemIcon>
        <ListItemText>{title}</ListItemText>
      </ListItem>

      <List disablePadding dense>
        <a href="/">
          <ListItem button>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
            <Arrow className="state" />
          </ListItem>
        </a>

        <a href="/about">
          <ListItem button>
            <ListItemIcon>
              <InfoRoundedIcon />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
            <Arrow className="state" />
          </ListItem>
        </a>
      </List>
    </div>
  );
};

export default Sidebar;
