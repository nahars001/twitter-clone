import { Avatar, Button } from '@mui/material';
import './TweetBox.css';

const TweetBox = () => {

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
                    ></Avatar>
                    <input placeholder="What's happening?"></input>
                </div>
                <input
                    className='tweetBox__inputImage'
                    placeholder="Enter image URL (Optional)."
                    type='text'
                />
                <Button className="tweetBox__tweetButton"> Tweet</Button>
            </form>
        </div>
    );


}



export default TweetBox;