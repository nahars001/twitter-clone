import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Sidebar = () => {

    return (
        <div className="sidebar">
            {/* twiter icon */}
            <TwitterIcon className="sidebar__twitterIcon" />

            <Link to="home">
                <SidebarOption active Icon={HomeIcon} text="Home" />
            </Link>
            <Link to="explore">
                <SidebarOption Icon={TagIcon} text="Explore" />
            </Link>
            <Link to="notifications">
                <SidebarOption Icon={NotificationsNoneIcon} text="Notifcations" />
            </Link>
            <Link to="messages">
                <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            </Link>
            <Link to="bookmarks">
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            </Link>
            <Link to="lists">
                <SidebarOption Icon={ListAltIcon} text="Lists" />

            </Link>
            <Link to="profile">
                <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            </Link>



            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Link to="home">
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet </Button>

            </Link>

            {/* side bar options */}
            {/* tweet button */}

        </div>


    );
}



export default Sidebar;