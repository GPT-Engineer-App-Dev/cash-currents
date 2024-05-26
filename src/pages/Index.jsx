import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="3">
          <Heading as="h1" size="xl" mb={4}>
            Main News Section
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">News Article 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">News Article 2</Heading>
              <Text mt={2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" bg="gray.100" p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md">Additional Content 1</Heading>
              <Text mt={2}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Additional Content 2</Heading>
              <Text mt={2}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;