import React from 'react';
import './post.css'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
function Post({ username,caption,imageUrl}){
    return(
        <div className='post'>
        <div className='post_header'>
       <IconButton>
        <Avatar 
        className='avatar_img'
        alt={username}
        src="/static/images/avatar/1.jpg" />
        </IconButton>
        <h3>{username}</h3>
        </div>
        <img className='post_img'
        src={imageUrl}>
        </img>
        <h4 className='post_caption'><strong>{username}</strong>{caption}</h4>
        </div>
        
        )
    }
export default Post;