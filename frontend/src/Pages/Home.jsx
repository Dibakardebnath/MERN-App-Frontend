import { useEffect, useState } from 'react';
import './Home.css'
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import { getPublicData } from '../Redux/Api';
import { Box, Button, Text, Link, Heading,Image, CardFooter, Card, Flex, CardBody } from '@chakra-ui/react';

import { Footer } from './Footer';


export const Home=()=>{
  const dispatch=useDispatch()
  const {Data,total}=useSelector((store)=>store)

  // ..................Slider............................
    const sliderImages = [
        'https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg', 
        'https://startit.qodeinteractive.com/wp-content/uploads/2015/10/image-slider-1-home-main.jpg',
        'https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg',
        'https://startit.qodeinteractive.com/wp-content/uploads/2015/10/image-slider-4-home-main.jpg', 
        'https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg',
        'https://startit.qodeinteractive.com/wp-content/uploads/2015/10/image-slider-2-home-main.jpg',
        'https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg',
        'https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg',
        'https://wowslider.com/sliders/demo-74/data1/images/london441853_1280.jpg',
      ];
      const [autoSlide, setAutoSlide] = useState(true);
      const [slideInterval, setSlideInterval] = useState(3000); 
      const [currentIndex, setCurrentIndex] = useState(0);

  // ............................. pagination............................

      const [page,setPage]=useState(1)
      

      const handlePage=(pageNo)=>{
        setPage(page+pageNo);

      }

    

      
      useEffect(() => {
      
        let interval;
         interval = setInterval(() => {
            goToNextSlide();
          }, 2000);
      
    
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex]);
    
    
      const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1));
      };
    
      const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length-1 ? 0 : prevIndex + 1));
      };
    // ...........................end........................

      console.log(Data)
      useEffect(()=>{

        dispatch(getPublicData(page))

      },[page])

      const nextBtn=Math.ceil(total/3)
   
 

      return (
        <Box className="home-page">
         
          <Box className="slider-container" >
      
          <Image  className="slide" src={sliderImages[currentIndex]}  />
      
      </Box>
          <Box className="slider-button">
            <Button className="slider-button1" onClick={goToPreviousSlide}>&#10094;</Button>
            <Button className="slider-button2" onClick={goToNextSlide}>&#10095;</Button>
           
          </Box> 
       
          <Box className='blog-category'>Blog-Category</Box>
          <Box className='image'>
            <Image src="https://media.istockphoto.com/id/521180711/photo/red-eared-slider-trachemys-scripta-elegans-turtle.jpg?s=612x612&w=0&k=20&c=6q6wCDK8p41K-9iHlW7__F8CDD6pA9B4E5QqQtLC2B0=" alt="" />
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgE-OIe6JKELlVumRWj452BigVvwPx6LrgrjJSaNykk_DFicwUgrL4ljC7WFqxkyZNB-Q&usqp=CAU" alt="" />
            <Image src="https://www.paisabazaar.com/wp-content/uploads/2018/09/Aditya-Birla-Sun-Life.jpg" alt="" />
            <Image src="https://investoracademy.in/wp-content/uploads/Mutual-Fund-for-Child-Education.jpg" alt="" />

          </Box>
          <Box className='blog-category' >Public Blog</Box>
          <Box className='public-data'>
          {Data && Data.map(({title,description,_id,createdAt})=>
          <Card key={_id} className="blog">
            <CardBody className='smallDiv'>

            <Heading size={'md'}>{title}</Heading>

            <Text fontSize='md' mt={'10px'}>
  {description.slice(0, 40)} {description.length > 40 ? '...' : ''}
  {description.length > 40 && (
    <a href={`/dashboard/${_id}`} style={{ color: 'orange', marginLeft: '5px' }}>
      read more
    </a>
  )}
</Text>


           <Text className='posted'>posted: {Math.floor((new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24))} days ago</Text>
       

            </CardBody>
            <CardFooter className='cardFooter'>
         <Button flex='1' variant='ghost' leftIcon={<BiLike />}></Button>
         <Button flex='1' variant='ghost' leftIcon={<BiChat />}> </Button>
         <Button flex='1' variant='ghost' leftIcon={<BiShare />}>  </Button>
      </CardFooter>
 
          </Card>
          )}
           
          </Box>
          <Box className='button'>
            
          <Button isDisabled={page===1} colorScheme='teal' variant='solid'  onClick={()=>handlePage(-1)}>prev</Button>
          <Flex borderRadius='md' bg='white' color='black' px={5} h={10} justify="center" align="center" >
            {page}
          </Flex>

          <Button isDisabled={page===nextBtn}  colorScheme='teal' variant='solid' onClick={()=>handlePage(1)}>next</Button>

          </Box>
         
        <Flex className='firstCard'>
          <Image className='Images' src='https://www.shutterstock.com/shutterstock/photos/605950769/display_1500/stock-photo-blog-website-article-lifestyle-online-word-605950769.jpg'></Image>
          <Box className='firstCardbody'>
            <Heading>Living Life to the Fullest</Heading>
            <Heading  as='h4' size='md'  mb={'15px'}>Nurturing a Life Filled with Optimism</Heading>
             <Text>Life is a beautiful journey, and a positive mindset acts 
              as our compass, guiding us through challenging times and propelling
               us forward in moments of triumph. It empowers us to face adversity
                with resilience, to overcome obstacles with determination, 
                and to learn valuable lessons from setbacks. With positivity as 
                our foundation, we have the strength to keep pushing forward, 
                knowing that every experience serves a purpose in our personal 
                development.
                </Text>
          </Box>
        </Flex>


          <Flex className='secCard'>
          <Box className='secCardbody'>
            <Heading>Influencer Marketing</Heading>
            <Heading  as='h4' size='md'  mb={'15px'}>Harnessing the Power of Influencers for Brand Growth</Heading>
             <Text>One of the key benefits of influencer marketing is the ability
               to reach a highly targeted audience. Influencers often have a niche 
               focus or expertise, which allows brands to connect with a specific
                group of consumers who are already interested in their industry or 
                niche. This targeted approach helps to ensure that the brands message 
                reaches the right people, increasing the likelihood of conversions and 
                sales
                </Text>
          </Box>
          <Image className='Images' src='https://grin.co/wp-content/uploads/2020/08/IM_SA_Influencers_for_Every_Stage_of_the_Influencer_Marketing_Funnel_2022-Q3-07_FINAL_BLGI_960x640_01-1.webp'></Image>
         
        </Flex>

          <Flex className='firstCard'>
          <Image className='Images' src='https://ychef.files.bbci.co.uk/976x549/p01rpz8r.jpg'></Image>
          <Box className='firstCardbody'>
            <Heading>Mount Everest</Heading>
            <Heading  as='h4' size='md'  mb={'15px'}>Discover the Majestic Beauty of Hills</Heading>
             <Text>Hills are natures magnificent creations that offer breathtaking landscapes and serene environments, making them an ideal destination for travelers seeking tranquility and scenic beautyWith their towering peaks, lush green valleys, and cascading waterfalls, hills provide a perfect escape from the hustle and bustle of city life,
               allowing travelers to immerse themselves in the soothing embrace of nature
                </Text>
          </Box>
        </Flex>

          <Flex className='secCard'>
          <Box className='secCardbody'>
            <Heading>Impact of Technology</Heading>
            <Heading  as='h4' size='md' mb={'15px'}>Shaping the Future in a Connected World</Heading>
             <Text>Firstly, technology has enhanced communication, breaking down geographical barriers and enabling instant connectivity through platforms such as social media, video conferencing, and messaging apps. It has facilitated global collaboration, knowledge sharing, and strengthened relationships across borders. Additionally, technology has revolutionized industries, driving automation, streamlining processes, and boosting productivity. It has empowered businesses to reach wider audiences,
               personalize experiences, and deliver innovative products and services.
                </Text>
          </Box>
          <Image className='Images' src='https://elearningindustry.com/wp-content/uploads/2022/11/shutterstock_1798672534.jpg'></Image>
         
        </Flex>

          <Flex className='firstCard'>
          <Image className='Images' src='https://calvin.edu/dotAsset/137e6845-ec8a-4c58-b097-06af44554088.jpg'></Image>
          <Box className='firstCardbody'>
            <Heading>Importance of Study</Heading>
            <Heading  as='h4' size='md'  mb={'15px'}>The Power of Learning: Unlocking Potential through Study</Heading>
             <Text>Engaging in study brings numerous benefits. Firstly, it provides individuals with the opportunity to explore new subjects, ideas, and perspectives. Through study, people can expand their horizons, develop a broader understanding of the world, and cultivate a sense of intellectual curiosity. Study also fosters the development of critical thinking and problem-solving skills, allowing individuals to analyze information,
               make informed decisions, and tackle challenges effectively.
                </Text>
          </Box>
        </Flex>


        <Footer/>
        </Box>
      );
}