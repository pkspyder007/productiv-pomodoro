import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'
import { SafeAreaView } from 'react-native'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/bg-2.jpeg')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-40px"
        pt="20px"
        p={4}
      >
        <VStack flex={1} space={4} mb={'30px'}>
          <Box flexDirection="row" justifyContent="space-around">
            <Image
              source={require('../assets/pk.png')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
            <Image
              source={require('../assets/abhigya.png')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a React Native app build with beautiful UI and productivity in mind.
            Developed By Abhigya and Praveen
          </Text>
          <Text fontSize="md" w="full">
            Developed By Abhigya and Praveen
          </Text>
          <Text fontSize="xl" w="full">
            Features
          </Text>
          <Text fontSize="md" w="full">
            📓 Task manager
          </Text>
          <Text fontSize="md" w="full">
            ⏳ Pomodoro Technique View
          </Text>
          <Text fontSize="md" w="full">
            📳 Vibration Alerts
          </Text>
          <Text fontSize="md" w="full">
            😻 Beautiful UI
          </Text>
          <LinkButton
            mt={2}
            colorScheme="gray"
            size="lg"
            borderRadius="full"
            href="https://github.com/AbhigyaShridhar/Awesome-Planner"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Go to Github repository
          </LinkButton>
          
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
