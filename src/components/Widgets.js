import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; import React from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Post from './Post';
 import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets"> 
        <div className="widgets__input"> 
        <SearchOutlinedIcon className="widgets__searchIcon"/>
        <input placeholder="Search Twitter" type="text"/>
        </div>
        <div className="widgets__widgetContainer">
            <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1605957811162054656'} />
                <Post/>
                <Post />
                <Post />
                <Post />
                <Post />

                <TwitterTweetEmbed tweetId={'1605957811162054656'} />


        </div>
        </div>
    );
}




export default Widgets;