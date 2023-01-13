import { Avatar, Button } from '@mui/material';
import './TweetBox.css';

const TweetBox = () => {

    return(
        <div className="TweetBox">
            <form>
                <div className='tweetBox__input'> 
                    <Avatar src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
                    ></Avatar>
                <input placeholder="what's happening?"></input>
                </div>
                <Button> Tweet</Button>
            </form>
        </div>
    );


}



export default TweetBox;