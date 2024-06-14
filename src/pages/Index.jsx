import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mt={10}>
          <Heading as="h1" size="2xl" mb={4}>Welcome to Our Band's Tour</Heading>
          <Text fontSize="lg">Join us on our journey across the world. Check out our tour dates and get your tickets now!</Text>
        </Box>

        <Box>
          <Image src="/path-to-your-image.jpg" alt="Band Image" borderRadius="md" />
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>Upcoming Tours</Heading>
          <Text fontSize="md">Stay tuned for our latest tour dates and locations.</Text>
        </Box>

        <Flex justify="center" mt={4}>
          <Button colorScheme="teal" size="lg" mr={4}>Get Tickets</Button>
          <Button colorScheme="teal" size="lg">Learn More</Button>
        </Flex>

        <Box textAlign="center" mt={10}>
          <Heading as="h2" size="xl" mb={4}>Follow Us</Heading>
          <Flex justify="center" spacing={4}>
            <Button as="a" href="https://facebook.com" target="_blank" colorScheme="facebook" leftIcon={<FaFacebook />}>Facebook</Button>
            <Button as="a" href="https://twitter.com" target="_blank" colorScheme="twitter" leftIcon={<FaTwitter />}>Twitter</Button>
            <Button as="a" href="https://instagram.com" target="_blank" colorScheme="pink" leftIcon={<FaInstagram />}>Instagram</Button>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;