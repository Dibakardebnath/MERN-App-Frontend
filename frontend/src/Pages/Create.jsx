import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import "./Create.css";
import { Footer } from "./Footer";
import { useState } from "react";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { postData } from "../Redux/Api";
export const Create = () => {
  const dispatch = useDispatch();
  const [newuser, setNewUser] = useState({
    title: "",
    category: "",
    description: "",
  });
  const handlSub = async (e) => {
    e.preventDefault();

    dispatch(postData(newuser));
    alert("posted");
    setNewUser({
      title: "",
      category: "",
      description: "",
    });
  };
  return (
    <Box>
      <Box className="FormBox" border={"1px solid"}>
        <form onSubmit={handlSub}>
          <Stack spacing={3}>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={newuser.title}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="Category" isRequired>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                name="category"
                value={newuser.category}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="Description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                type="Description"
                name="description"
                value={newuser.description}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <Button colorScheme="green" w={"200px"} m={"auto"} type="submit">
              Post
            </Button>
          </Stack>
        </form>
      </Box>
      <Footer />
    </Box>
  );
};
