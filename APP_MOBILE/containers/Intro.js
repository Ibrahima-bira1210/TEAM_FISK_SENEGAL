import React, {useEffect} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { VStack, Center, Heading, Image, Text, Icon, IconButton, CheckCircleIcon } from "native-base";
import i18n from '../helpers/localization';
import { AntDesign } from "@expo/vector-icons"
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
    {
      key: 1,
      title: i18n.t('title1'),
      text: i18n.t('text1'),
      image: require('./../assets/img/answer.png'),
      backgroundColor: 'primary.400',
    },
    {
      key: 2,
      title: i18n.t('title2'),
      text: i18n.t('text2'),
      image: require('./../assets/img/feedback.png'),
      backgroundColor: 'secondary.500',
    },
    {
      key: 3,
      title: i18n.t('title3'),
      text: i18n.t('text3'),
      image: require('./../assets/img/work_chat.png'),
      backgroundColor: '#22bcb5',
    }
];
  
const renderItem = ({ item }) => {
  return (

    <Center flex={1} py="4" bg={item.backgroundColor}>
        <VStack space={4} alignItems="center">
            
            <Heading textAlign="center" mb='10' color='white'>
                {item.title}
            </Heading>

            <Image source={item.image} alt="Image" size="2xl" />

            <Text fontWeight="medium" color="white">
                {item.text}
            </Text>

        </VStack>
    </Center>
  );
}

const renderNextButton = () => {
  return (
    <IconButton 
      onPress={() => next()}
      icon={<Icon as={AntDesign} name="rightcircleo" />}
      borderRadius="full"
      _icon={{
        color: "orange.500",
        size: "md",
      }}
      _hover={{
        bg: "orange.600:alpha.20",
      }}
      _pressed={{
        bg: "orange.600:alpha.20",
        _icon: {
          name: "rightcircleo",
        },
      }}
      _ios={{
        _icon: {
          size: "md",
        },
      }}
    />
  );
};


const onDone = (navigation) => {
  (async () => {
    await AsyncStorage.setItem('getStartedApp', 'true').then(
      () => {
        navigation.getParent().setOptions({headerShown: true});
        navigation.navigate('GetOrg');
      }
    );
  })();
  
}

const renderPrevButton = () => {
  return (
    <IconButton 
      onPress={() => next()}
      icon={<Icon as={AntDesign} name="leftcircleo" />}
      borderRadius="full"
      _icon={{
        color: "orange.500",
        size: "md",
      }}
      _hover={{
        bg: "orange.600:alpha.20",
      }}
      _pressed={{
        bg: "orange.600:alpha.20",
        _icon: {
          name: "rightcircleo",
        },
      }}
      _ios={{
        _icon: {
          size: "md",
        },
      }}
    />
  );
}

const renderDoneButton = () => {
  return (
    <IconButton
      icon={<CheckCircleIcon size="4" />}
      borderRadius="full"
      _icon={{
        color: "orange.500",
        size: "md",
      }}
      _hover={{
        bg: "orange.600:alpha.20",
      }}
      _pressed={{
        bg: "orange.600:alpha.20",
        _icon: {
          name: "done",
        },
      }}
      _ios={{
        _icon: {
          size: "md",
        },
      }}
    />
  );
};


const next = () => {
  return 'Next'
}

const back = () => {
  return 'Back';
}

const Intro = ({navigation}) => {

  useEffect(() => {

    navigation.getParent().setOptions({headerShown: false});

  }, [])

    return (
        <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton={true}
        onDone={onDone(navigation)}
        
      />
    )
}



export default Intro;