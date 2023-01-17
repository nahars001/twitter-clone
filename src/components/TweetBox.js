import { Avatar, Button } from '@mui/material';
import { useState } from 'react';
import './TweetBox.css';
import db from '../firebase';
const TweetBox = () => {

    const[tweetMessage , setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const onChangeHandler = (event) => {
        setTweetMessage(event.target.value);

    }
    const imageChangeHandler = event => {
        setTweetImage(event.target.value);
    }
 const  submitHandler = event => {
        event.preventDefault();
        db.collection('posts').add({
            displayName: "Nahar Singh",
            username: "naharSingh",
            verified: true,
            timeStamp: "13",
            message: tweetMessage,
            avatar: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            image: (tweetImage.trim().length === 0 ? "https://media.tenor.com/QeGBqkEiu6YAAAAC/yay-yayy.gif" : tweetImage.trim())

        })
        setTweetMessage("");
        setTweetImage("");
        
    }
        
    return (
        <div className="tweetBox">
            <form onSubmit={submitHandler}>
                <div className="tweetBox__input">
                    <Avatar src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
                    ></Avatar>
                    <input  onChange={onChangeHandler} value={tweetMessage} placeholder="What's happening?"></input>
                </div>
                <input
                    className='tweetBox__inputImage'
                    placeholder="Enter image URL (Optional)."
                    type='text'
                    value={tweetImage}
                    onChange={imageChangeHandler}
                />
                <Button className="tweetBox__tweetButton" type="submit" onClick={submitHandler}> Tweet</Button>
            </form>
        </div>
    );


}



export default TweetBox;