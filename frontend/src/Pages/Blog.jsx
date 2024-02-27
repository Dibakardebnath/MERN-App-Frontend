import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { useParams } from "react-router-dom";
import "./Blog.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthData, LOGIN } from "../Redux/Action";

export const Blog = () => {
  const { isAuth, login } = useSelector((store) => store);

  console.log(login);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [blogData, setBlogData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/dashboard/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      if (response.status === 200) {
        setBlogData(response.data.data);
        dispatch(LOGIN(true));
        dispatch(AuthData(true));
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(blogData);
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <Box className="parentDiv">
      <Card>
        <CardBody className="cardBody">
          <Flex className="Avatar">
            <Avatar name={blogData.email} src="" />

            <Box>
              <Heading size="lg" color={"white"}>
                {blogData.title}
              </Heading>
            </Box>
          </Flex>
          <Text size="md">{blogData.description}</Text>
        </CardBody>

        <Flex className="btnFlex">
          <Button className="like" leftIcon={<BiLike />}></Button>
          <Button className="like" leftIcon={<BiChat />}></Button>
          <Button className="like" leftIcon={<BiShare />}></Button>
        </Flex>
      </Card>
    </Box>
  );
};
