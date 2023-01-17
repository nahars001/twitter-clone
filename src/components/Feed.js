
import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    }, []);
    console.log(posts[0]);


    const tweet =
    {
        displayName: "Nahar Singh",
        username: "naharSingh",
        verified: true,
        timeStamp: "13h",
        message: "  I'm building my own twittter ",
        avatar: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        image: "https://i.gifer.com/Okf.gif"
    }


    return (
        <div className='feed'>
            {/* header */}
            <div className="feed__header">

            </div>
            {/* tweet Box */}
            <TweetBox />
            {/* Post */}
            {posts.map(post => (
                <Post tweet={post} />
            ))}

            <Post tweet={tweet}/>









            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}




        </div>
    );
}


export default Feed;