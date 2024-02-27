import {
  Box,
  Button,
  Text,
  Link,
  Heading,
  Card,
  Flex,
  CardBody,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Input,
  FormControl,
  Image,
} from "@chakra-ui/react";
import "./Dashboard.css";
import { FaFilter, FaSort } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteData, getPersonalData, updateValue } from "../Redux/Api";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { HamburgerIcon } from "@chakra-ui/icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import "~react-image-gallery/styles/scss/image-gallery.scss";
import { Footer } from "./Footer";
import Modal from "react-modal";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { PersonalData, total } = useSelector((store) => store);

  const [id, setId] = useState("");
  const [updateVal, setUpdateVal] = useState({
    title: "",
    category: "",
    description: "",
  });
  // console.log(updateVal)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    console.log("yues");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [value, setValue] = useState("");
  const [order, setOrder] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      // thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      // thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      // thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const handleValue = (val) => {
    switch (val) {
      case "Programming":
        return setValue("Programming");
      case "Food":
        return setValue("Food");
      case "Art":
        return setValue("Art");
      case "":
        return setValue("");
      default:
        throw new Error("invalid");
    }
  };

  const handleOrder = (value) => {
    switch (value) {
      case "asc":
        return setOrder("asc");
      case "desc":
        return setOrder("desc");
      default:
        throw new Error("invalid");
    }
  };

  const handlePage = (Num) => {
    setPageNo(pageNo + Num);
  };

  useEffect(() => {
    dispatch(getPersonalData(pageNo, value, order));
  }, [id, updateVal, value, order, pageNo]);

  const handleDel = (_id) => {
    console.log(_id);
    dispatch(deleteData(_id));
  };

  const handleUpdate = (id) => {
    setId(id);
  };

  const handleUpd = () => {
    console.log(updateVal);
    dispatch(updateValue(id, updateVal));
    closeModal();
  };

  const nextBtn = Math.ceil(total / 3);

  return (
    <Box>
      <Modal
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Modal"
      >
        {/* Your modal content goes here */}
        <Box className="modal-edit">
          <Heading className="editBlog">Edit Blog</Heading>
          <FormControl>
            <Input
              type="text"
              placeholder="title"
              name="title"
              value={updateVal.title}
              onChange={(e) =>
                setUpdateVal({ ...updateVal, [e.target.name]: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="category"
              name="category"
              value={updateVal.category}
              onChange={(e) =>
                setUpdateVal({ ...updateVal, [e.target.name]: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="description"
              name="description"
              value={updateVal.description}
              onChange={(e) =>
                setUpdateVal({ ...updateVal, [e.target.name]: e.target.value })
              }
            />
          </FormControl>
          <Flex className="modalbtn">
            <Button onClick={closeModal}>Close</Button>
            <Button onClick={() => handleUpd()}>Save</Button>
          </Flex>
        </Box>
      </Modal>
      <Heading className="myBlog">My Blogs</Heading>
      <Flex className="funBlog">
        <Box className="funBlog1">
          <Box className="filterBlog1">
            <Flex alignItems="center">
              <span marginRight="5px">Filter by</span>
              <FaFilter size={15} style={{ marginLeft: "10px" }} />
            </Flex>
          </Box>
          <Box className="allFunBtn1">
            <Button
              className="btn"
              value={"Programming"}
              colorScheme="teal"
              variant="outline"
              color={"white"}
              onClick={(e) => handleValue(e.target.value)}
            >
              Programme
            </Button>
            <Button
              colorScheme="teal"
              value={"Art"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleValue(e.target.value)}
            >
              Art
            </Button>
            <Button
              colorScheme="teal"
              value={"Food"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleValue(e.target.value)}
            >
              Food
            </Button>
            <Button
              colorScheme="teal"
              value={""}
              variant="outline"
              color={"white"}
              onClick={(e) => handleValue(e.target.value)}
            >
              All
            </Button>
          </Box>
        </Box>
        <Spacer />
        <Box className="funBlog2">
          <Box className="filterBlog2">
            <Flex alignItems={"center"}>
              <span>Sort by</span>
              <FaSort size={20} style={{ marginLeft: "10px" }} />
            </Flex>
          </Box>
          <Box className="allFunBtn2">
            <Button
              colorScheme="teal"
              value={"desc"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleOrder(e.target.value)}
            >
              latest
            </Button>
            <Button
              colorScheme="teal"
              value={"asc"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleOrder(e.target.value)}
            >
              old
            </Button>
          </Box>
        </Box>
      </Flex>
      {PersonalData.length === 0 ? (
        <Image
          margin={"auto"}
          src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        ></Image>
      ) : (
        <Box className="my-data">
          {Array.isArray(PersonalData) &&
            PersonalData.map(({ title, description, _id, createdAt }) => (
              <Card key={_id} className="my-blog">
                <CardBody>
                  <Flex className="TitleGap" padding={"0px 20px"}>
                    <Heading size={"sm"}>{title}</Heading>
                    <Spacer />
                    <Menu>
                      <MenuButton as={Box} cursor="pointer">
                        <Icon as={HamburgerIcon} boxSize={6} />
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                          onClick={() => {
                            openModal();
                            handleUpdate(_id);
                          }}
                        >
                          Edit
                        </MenuItem>

                        <MenuItem onClick={() => handleDel(_id)}>
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>

                  <Box mt={"15px"}>
                    <Text fontSize="sm">
                      {description.slice(0, 25)}{" "}
                      {description.length > 25 ? "..." : ""}
                      {description.length > 25 && (
                        <a
                          href={`/dashboard/${_id}`}
                          style={{ color: "orange", marginLeft: "5px" }}
                        >
                          read more
                        </a>
                      )}
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize="sm" mt={"20px"}>
                      posted:{" "}
                      {Math.floor(
                        (new Date() - new Date(createdAt)) /
                          (1000 * 60 * 60 * 24)
                      )}{" "}
                      days ago
                    </Text>
                  </Box>
                </CardBody>

                <Flex className="icons">
                  <Button
                    flex="1"
                    variant="ghost"
                    leftIcon={<BiLike />}
                  ></Button>
                  <Button
                    flex="1"
                    variant="ghost"
                    leftIcon={<BiChat />}
                  ></Button>
                  <Button
                    flex="1"
                    variant="ghost"
                    leftIcon={<BiShare />}
                  ></Button>
                </Flex>
              </Card>
            ))}
        </Box>
      )}

      <Box className="pagination">
        <Button
          isDisabled={pageNo === 1}
          colorScheme="teal"
          variant="solid"
          onClick={() => handlePage(-1)}
        >
          prev
        </Button>
        <Flex
          borderRadius="md"
          bg="white"
          color="black"
          px={5}
          h={10}
          justify="center"
          align="center"
        >
          {pageNo}
        </Flex>

        <Button
          isDisabled={pageNo === 1}
          colorScheme="teal"
          variant="solid"
          onClick={() => handlePage(1)}
        >
          next
        </Button>
      </Box>
      <Heading mt={"40px"}>Capture World in Your Own Word's</Heading>
      <Text fontSize="md" w={"94%"} m={"20px auto"}>
        From wanderlust-filled travel tales to tantalizing food adventures and
        insightful personal growth insights, our blog is a diverse tapestry of
        captivating stories that will inspire, nourish, and ignite your
        curiosity.
      </Text>
    
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={true}
        slideInterval={2000}
        slideOnThumbnailOver={false}
        showBullets={true}
      />

     
      <Footer />
    </Box>
  );
};
