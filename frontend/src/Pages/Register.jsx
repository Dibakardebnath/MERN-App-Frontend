import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthData, LOGIN } from "../Redux/Action";

export const Register = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((store) => store);

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    console.log(isLogin);
    try {
      if (isLogin) {
        const response = await axios.post(
          "https://lazy-jade-barracuda-tux.cyclic.cloud/login",
          user,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const token = response.data.token; // Access the token from response.data
        if (token) {
          sessionStorage.setItem("token", JSON.stringify(token));
          sessionStorage.setItem("email", JSON.stringify(user.email));
          dispatch(LOGIN(true));
          dispatch(AuthData(true));
          navigate("/");
        } else {
          console.log("Invalid Login");
        }
      } else {
        const response = await axios.post(
          "https://lazy-jade-barracuda-tux.cyclic.cloud/signup",
          user,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        // console.log(response.data);
        setUser({
          name: "",
          email: "",
          password: "",
        });
        setIsLogin(!isLogin);
      }
    } catch (error) {
      alert("invalid login");
      console.error(error);
    }
  };

  return (
    <Box className="mainBox" border={"1px solid"}>
      <Heading as="h1" size="xl" mb={4}>
        {isLogin ? "Login" : "Signup"}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {!isLogin && (
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </FormControl>
          )}

          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </FormControl>

          <Button type="submit" colorScheme={isLogin ? "green" : "green"}>
            {isLogin ? "Login" : "Signup"}
          </Button>
        </Stack>
      </form>

      <Button
        mt={4}
        colorScheme="teal"
        variant="solid"
        onClick={toggleAuthMode}
      >
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </Button>
    </Box>
  );
};
