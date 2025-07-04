import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container maxW="container.lg" py={16}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          My Projects
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Some of my recent work
        </Text>
      </Box>
    </Container>
  );
};

export default Projects;
