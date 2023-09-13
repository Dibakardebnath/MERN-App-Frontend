import React from 'react';
// import { Box, Text, Link, Flex, Heading } from '@chakra-ui/react';
import './Footer.css'
import pic from '../Images/blog_logo2.png';

export const Footer = () => {
  return (
    <footer className="footer-distributed">

			<div className="footer-left">

				{/* <h3>Dibakar<span>Blog</span></h3> */}
				<img className='logo' src={pic} alt="" />

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Create</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">blog © 2015</p>
			</div>

			<div className="footer-center" >

				<div>
					<i className="fa fa-map-marker"></i>
					&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;
			
					<p>Contact Information</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p className='contact' style={{ display:"grid",gridTemplateColumns:"1fr", width:"60%",placeItems:"center",marginTop:"-30px",gap:"10px 0px"}}><p>ddibakar@gmail.com </p> <p>+91-87-8745-5034</p> </p>
					
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p>© 2023 My Blog. All rights reserved.</p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About my blog</span>
					Welcome to My Blog, your source for insightful articles and stories.
				</p>

				<div className="footer-icons">

					<a style={{border:"none"}} ><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="" /></a>
					<a ><img src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png" alt="" /></a>
					<a ><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" /></a>
					<a ><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
{/* href="#" */}
				</div>

			</div>

		</footer>
  );
};


