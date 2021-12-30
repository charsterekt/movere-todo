import React from 'react'
import { 
    Box, 
    Text, 
    VStack,
    Icon,
    Image,
    ScrollView,
    useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import  Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
    return (
        <AnimatedColorBox 
            flex={1}
            bg={useColorModeValue('warmGray.50', 'warmGray.900')}
            w="full"
        >   
            <Masthead
                title="About the app"
                image={require('../assets/about-masthead.png')}
            >
                <NavBar />
            </Masthead>
            <ScrollView
                borderTopLeftRadius="20px"
                borderTopRightRadius="20px"
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt="-20px"
                pt="30px"
                p={4}
                overScrollMode='always'
            >
                <VStack flex={1} space={4}>
                    <Box alignItems="center">
                        <Image 
                            source={require('../assets/developer.png')}
                            alt="author"
                            borderRadius="full"
                            resizeMode="cover"
                            w={120}
                            h={120}
                        />
                    </Box>
                    <Text fontSize="md" w="full">
                        This is a simple to-do list app, built with React Native. It was intended to be pleasant to look at and easy to use, with clean and satisfying animations. My name is Dhruv and i'm a student developer who dabbles in a bit of everything. You can reach out to me on my socials linked below.
                    </Text>
                    <LinkButton 
                        colorScheme={useColorModeValue('blue', 'darkBlue')}
                        size="lg"
                        borderRadius="full"
                        href="https://www.linkedin.com/in/dhruv-krishnamachari-3a3a071a2/"
                        leftIcon={
                            <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
                        }
                    >
                        LinkedIn Page
                    </LinkButton>
                    <LinkButton 
                        colorScheme='purple'
                        size="lg"
                        borderRadius="full"
                        href="https://github.com/charsterekt"
                        leftIcon={
                            <Icon as={Feather} name="github" size="sm" opacity={0.5} />
                        }
                    >
                        GitHub Profile
                    </LinkButton>
                    <LinkButton 
                        colorScheme='red'
                        size="lg"
                        borderRadius="full"
                        href="https://www.youtube.com/channel/UCbmI_bHrA12d4jXHER9ktZw"
                        leftIcon={
                            <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
                        }
                    >
                        Youtube Page
                    </LinkButton>
                </VStack>
            </ScrollView>
        </AnimatedColorBox>
    )
}

export default AboutScreen