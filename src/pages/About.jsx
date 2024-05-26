import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={4}>
      <Box p={4} shadow="md" borderWidth="1px">
        <Heading as="h1" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">
          Financial Times is a leading global news organization, providing essential news, comment, data and analysis for the global business community.
        </Text>
      </Box>
    </Container>
  );
};

export default About;