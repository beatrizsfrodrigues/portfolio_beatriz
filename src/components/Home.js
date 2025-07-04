import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Avatar,
  Card,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Container maxW="container.lg" py={16}>
        <Box textAlign="center">
          <Avatar.Root shape="full" className="avatar" width={300} height={300}>
            <Avatar.Fallback name="Random User" />
            <Avatar.Image className="myImage" src="/pfp.jpeg" />
          </Avatar.Root>
          <Heading as="h1" size="2xl" mb={4}>
            Hi, I'm Beatriz!
          </Heading>
          <Text fontSize="xl" color="gray.600" mb={8}>
            I'm a Frontend Developer.
          </Text>
          <Button colorScheme="blue" size="lg">
            View My Work
          </Button>
        </Box>
      </Container>

      <Container maxW="container.lg" py={16}>
        <Heading as="h1" size="2xl" mb={4}>
          Projects
        </Heading>

        <Card.Root width="300px" rounded="2xl" className="projectCard">
          <Card.Body gap="2">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src="https://res.cloudinary.com/dhp2bgd7u/image/upload/v1741814932/Vector_a4imbe.svg" />
              <Avatar.Fallback name="Nue Camp" />
            </Avatar.Root>
            <Card.Title mt="2" className="cardTitle">
              Nue Camp
            </Card.Title>
            <Card.Description>
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
              Curabitur nec odio vel dui euismod fermentum.
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button>Join</Button>
          </Card.Footer>
        </Card.Root>
      </Container>

      <Container maxW="container.lg" py={16}>
        <Heading as="h1" size="2xl" mb={4}>
          About me
        </Heading>
        <Avatar.Root shape="full" width={200} height={200} className="avatar">
          <Avatar.Fallback name="Random User" />
          <Avatar.Image className="myImage" src="/pfp.jpeg" />
        </Avatar.Root>
        <p>
          Hi! I’m Beatriz, a UX/UI designer and full-stack web developer with a
          passion for crafting seamless digital experiences. I’m currently
          pursuing my master’s degree in Communication and Web Technologies at
          the University of Aveiro, where I’m deepening my knowledge of design,
          development, and innovative web solutions.
        </p>
        <Button colorScheme="blue" size="lg" rounded="full" className="btn">
          Get to know me!
        </Button>
      </Container>
    </div>
  );
};

export default Home;
