
import { BarChartOutlined, ChatBubbleOutline, FavoriteBorder, FileUploadOutlined,   Repeat, Verified } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import './Post.css';



const Post = () => {

    // const displayName = "Nahar Singh";
    // const username = "nahar";
    // const verified = true;
    // const timeStamp = "time";
    // const message = " my first tweet";
    const avatar = "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png";
   // const imageSource = "https://files.slack.com/files-pri/T02BR318JA2-F04K01G8YNR/image.png";


    return <div className="post">
        <div className="post__avatar">
            <Avatar src={avatar} />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__hederText">
                    <h3>
                        Nahar Singh  {"  "}
                        <span className="post__headerSpecial">
                            <Verified className="verifiedIcon" /> @naharSingh
                        </span>
                    </h3>
                </div>
                <div className="post__headerdescription">
                    <p> I'm building my own twittter </p>
                </div>
            </div>
            <img src="https://i.gifer.com/Okf.gif" alt="gif">
            </img>
            <div className="post__footer">

                <BarChartOutlined fontSize="small" />

                <ChatBubbleOutline fontSize="small" ></ChatBubbleOutline>
                <Repeat fontSize="small" />
                <FavoriteBorder fontSize="small" />
                <FileUploadOutlined fontSize="small" />
            </div>
        </div>
    </div>
}


export default Post;