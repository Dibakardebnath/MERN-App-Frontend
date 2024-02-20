import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import './Create.css'
import { Footer } from "./Footer";
import { useState } from "react";
import axios from "axios";
export const Create=()=>{
 
  const [newuser,setNewUser]=useState({
    title:"",
    category:"",
    description:""
  })
  const handlSub = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("https://lazy-jade-barracuda-tux.cyclic.cloud/create", newuser, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        });
        if (response.status !== 200) {
            throw new Error("Failed to create the blog");
        }
        // Clear the form
        setNewUser({
            title: "",
            category: "",
            description: ""
        });
    } catch (error) {
        console.log("Error creating blog", error);
    }
}
  return (
    <Box>
<Box className="FormBox" border={'1px solid'}>
      <form  onSubmit={handlSub}>
        <Stack spacing={3}>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" value={newuser.title} onChange={(e)=>setNewUser({...newuser,[e.target.name]:e.target.value})} />
          </FormControl>
  
          <FormControl id="Category" isRequired>
            <FormLabel>Category</FormLabel>
            <Input type="text" name="category" value={newuser.category} onChange={(e)=>setNewUser({...newuser,[e.target.name]:e.target.value})}/>
          </FormControl>
  
          <FormControl id="Description" isRequired>
            <FormLabel>Description</FormLabel>
            <Input type="Description" name="description" value={newuser.description} onChange={(e)=>setNewUser({...newuser,[e.target.name]:e.target.value})}/>
          </FormControl>
  
          <Button colorScheme="green" w={'200px'} m={'auto'} type="submit">
            Post
          </Button>
        </Stack>
      </form>
     
    </Box>
      <Footer/>
    </Box>
  );
  };
