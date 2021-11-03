import React, {useEffect} from "react";
import { HStack, Text, Heading, Center, Container, Icon, IconButton, VStack, Image} from "native-base"; 
import { AntDesign} from "@expo/vector-icons";
import i18n from "../helpers/localization";

const Welcome = ({navigation}) => {


    useEffect(() => {

    navigation.getParent().setOptions({headerShown: false});

    }, [])

    return (
        <Center flex={1} space="2" bg="primary.400">
            <VStack justifyContent="space-between" px="2">
                <Container mb="5">

                        <Heading color="white" fontWeight="bold" mb="5" fontSize="4xl">
                            {i18n.t("welcome")}
                        </Heading>

                        <Image source={require('./../assets/img/logo2.png')} size="2xl" alt="image" />

                        <Text color="white" py="4" fontSize="2xl" fontWeight="bold">
                           {i18n.t("goal1")} <Text color="white" bg="secondary.500" px="3" borderRadius="10" fontSize="2xl" fontWeight="bold">{i18n.t("goal2")}</Text>
                        </Text>

                </Container>
                <HStack alignItems="center" mt="5">
                <Text fontSize="xl" fontWeight="bold" color="white">{i18n.t("go")}</Text> 
                <IconButton 
                    onPress={() => {navigation.navigate('Intro')}}
                    mx="4"
                    icon={<Icon as={AntDesign} name="rightcircleo" />}
                    borderRadius="full"
                    backgroundColor="secondary.500"

                    _icon={{
                        color: "white",
                        size: "md",
                    }}
                    _hover={{
                        bg: "orange.600:alpha.20",
                    }}
                    
                    />
                </HStack>
            </VStack>
        </Center>
    )
}

export default Welcome;