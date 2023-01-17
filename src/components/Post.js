
import { BarChartOutlined, ChatBubbleOutline, FavoriteBorder, FileUploadOutlined, Repeat, Verified } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import './Post.css';
import { forwardRef } from 'react';
import { Interweave } from "interweave";
 

const Post = forwardRef(
    (props , ref) => {

    const displayName = props.tweet.displayName;
    const username = props.tweet.username;
    const verified = props.tweet.verified;
    const timeStamp = props.tweet.timeStamp;
    const message = props.tweet.message;
    const avatar = props.tweet.avatar;
    const imageSource = props.tweet.image;


    return <div className="post" ref={ref}>
        <div className="post__avatar">
            <Avatar src={avatar} />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__hederText">
                    <h3>
                        {displayName}  {"  "}
                        <span className="post__headerSpecial">
                            {verified && <Verified className="verifiedIcon" />} @{username}
                            {" . "} {timeStamp}h</span>
                    </h3>
                </div>
                <div className="post__headerdescription">
                    <Interweave content={message} > </Interweave>
                </div>
            </div>
            <img src={imageSource} alt="gif">
            </img>
            <div className="post__footer">

                <BarChartOutlined fontSize="small" />

                <ChatBubbleOutline fontSize="small" />
                <Repeat fontSize="small" />
                <FavoriteBorder fontSize="small" />
                <FileUploadOutlined fontSize="small" />
            </div>
        </div>
    </div>
});


export default Post;