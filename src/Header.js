import React from 'react';
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
function Header() {
  return (
    <div className='header'>
      <img
      className='header_img'
      src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6337140/2340/1560/m1/fpnw/wm0/charity_logo_peview-.jpg?1556958090&s=b2f7eee52d2826f5a36270b6dbc2fefc"
      alt=''></img>
     <IconButton>
        <ForumSharpIcon/>
      </IconButton>
     
       </div>
     )
 
}export default Header;