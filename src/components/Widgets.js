import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; import React from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Post from './Post';
 import './Widgets.css';

const Widgets = () => {
    const tweet =
    {
        displayName: "Nahar Singh",
        username: "naharSingh",
        verified: true,
        timeStamp: "13h",
        message: "  I'm building my own twittter ",
        avatar: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        imageSource: "https://i.gifer.com/Okf.gif"
    }
    return (
        <div className="widgets"> 
        <div className="widgets__input"> 
        <SearchOutlinedIcon className="widgets__searchIcon"/>
        <input placeholder="Search Twitter" type="text"/>
        </div>
        <div className="widgets__widgetContainer">
            <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1605957811162054656'} />
               
                <Post tweet={tweet} /> 
                <Post tweet={tweet} /> 
                <Post tweet={tweet} /> 
                <Post tweet={tweet} /> 
                <TwitterTweetEmbed tweetId={'1605957811162054656'} />


        </div>
        </div>
    );
}




export default Widgets;