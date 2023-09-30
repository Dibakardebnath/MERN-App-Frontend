import { Box, Heading, Text,Image } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import pic from '../Images/Dibakar_image.png';
import { Footer } from "./Footer";
import './About.css'

export const About=()=>{
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];
    return (
        <Box>
            <Heading className="heading">About Us</Heading>
            <Text className="welcome-heading">Welcome to our blog! We are passionate 
                about sharing insightful content with our readers.</Text>

                <Box className='image-gallery'>
            <Image className="sliderGif" src="https://i.makeagif.com/media/2-07-2017/JTG6s-.gif"></Image>
            </Box>
            <Heading mt={'20px'}>Our Mission</Heading>
            <Text className="mission-text">Our mission is to empower individuals with valuable knowledge by
                 providing a platform for insightful and informative blog 
                 content. We aim to foster a community where people can share 
                 their expertise, experiences, and ideas to inspire and educate
                  others. Inspiring Creativity: We are dedicated to fostering 
                  creativity through our blog app.
             </Text>
             <Heading size={'md'}>Developed by</Heading>

             <Image m={'20px auto'} src={pic} ></Image>
             <Text className="name">Dibakar Debnath</Text>
             <Text className="course-name">Full Stack Web Developer</Text>
             <Footer/>
        </Box>
    )
}









