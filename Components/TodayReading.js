import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

import Dawki from '../assets/dawki-river.png'



const TodayReading = () => {

    const story  = `1At that time the Emperor Augustus ordered a census to be taken throughout the Roman Empire. 2When this first census took place, Quirinius was the governor of Syria. 3Everyone, then, went to register himself, each to his own town.

    4Joseph went from the town of Nazareth in Galilee to the town of Bethlehem in Judea, the birthplace of King David. Joseph went there because he was a descendant of David. 5He went to register with Mary, who was promised in marriage to him. She was pregnant, 6and while they were in Bethlehem, the time came for her to have her baby. 7She gave birth to her first son, wrapped him in strips of cloth and laid him in a manger — there was no room for them to stay in the inn.
    
    The Shepherds and the Angels
    
    8There were some shepherds in that part of the country who were spending the night in the fields, taking care of their flocks. 9An angel of the Lord appeared to them, and the glory of the Lord shone over them. They were terribly afraid, 10but the angel said to them, “Don't be afraid! I am here with good news for you, which will bring great joy to all the people. 11This very day in David's town your Saviour was born — Christ the Lord! 12And this is what will prove it to you: you will find a baby wrapped in strips of cloth and lying in a manger.”
    
    13Suddenly a great army of heaven's angels appeared with the angel, singing praises to God:
    
    14“Glory to God in the highest heaven,
    
    and peace on earth to those with whom he is pleased!”
    
    15When the angels went away from them back into heaven, the shepherds said to one another, “Let's go to Bethlehem and see this thing that has happened, which the Lord has told us.”
    
    16So they hurried off and found Mary and Joseph and saw the baby lying in the manger. 17When the shepherds saw him, they told them what the angel had said about the child. 18All who heard it were amazed at what the shepherds said. 19Mary remembered all these things and thought deeply about them. 20The shepherds went back, singing praises to God for all they had heard and seen; it had been just as the angel had told them.
    
    Jesus is Named
    
    21A week later, when the time came for the baby to be circumcised, he was named Jesus, the name which the angel had given him before he had been conceived.
    
    Jesus is Presented in the Temple
    
    22The time came for Joseph and Mary to perform the ceremony of purification, as the Law of Moses commanded. So they took the child to Jerusalem to present him to the Lord, 23as it is written in the law of the Lord: “Every firstborn male is to be dedicated to the Lord.” 24They also went to offer a sacrifice of a pair of doves or two young pigeons, as required by the law of the Lord.
    
    25At that time there was a man named Simeon living in Jerusalem. He was a good, God-fearing man and was waiting for Israel to be saved. The Holy Spirit was with him 26and had assured him that he would not die before he had seen the Lord's promised Messiah. 27Led by the Spirit, Simeon went into the Temple. When the parents brought the child Jesus into the Temple to do for him what the Law required, 28Simeon took the child in his arms and gave thanks to God:
    
    29“Now, Lord, you have kept your promise,
    
    and you may let your servant go in peace.
    
    30With my own eyes I have seen your salvation,
    
    31which you have prepared in the presence of all peoples:
    
    32A light to reveal your will to the Gentiles
    
    and bring glory to your people Israel.”
    
    33The child's father and mother were amazed at the things Simeon said about him. 34Simeon blessed them and said to Mary, his mother, “This child is chosen by God for the destruction and the salvation of many in Israel. He will be a sign from God which many people will speak against 35and so reveal their secret thoughts. And sorrow, like a sharp sword, will break your own heart.”
    
    36-37There was a very old prophet, a widow named Anna, daughter of Phanuel of the tribe of Asher. She had been married for only seven years and was now 84 years old. She never left the Temple; day and night she worshipped God, fasting and praying. 38That very same hour she arrived and gave thanks to God and spoke about the child to all who were waiting for God to set Jerusalem free.
    
    <h1>The Return to Nazareth</h1>
    
    39When Joseph and Mary had finished doing all that was required by the law of the Lord, they returned to their home town of Nazareth in Galilee. 40The child grew and became strong; he was full of wisdom, and God's blessings were upon him.
    
    The Boy Jesus in the Temple
    
    41Every year the parents of Jesus went to Jerusalem for the Passover Festival. 42When Jesus was twelve years old, they went to the festival as usual. 43When the festival was over, they started back home, but the boy Jesus stayed in Jerusalem. His parents did not know this; 44they thought that he was with the group, so they travelled a whole day and then started looking for him among their relatives and friends. 45They did not find him, so they went back to Jerusalem looking for him. 46On the third day they found him in the Temple, sitting with the Jewish teachers, listening to them and asking questions. 47All who heard him were amazed at his intelligent answers. 48His parents were astonished when they saw him, and his mother said to him, “My son, why have you done this to us? Your father and I have been terribly worried trying to find you.”
    
    49He answered them, “Why did you have to look for me? Didn't you know that I had to be in my Father's house?” 50But they did not understand his answer.
    
    51So Jesus went back with them to Nazareth, where he was obedient to them. His mother treasured all these things in her heart. 52Jesus grew both in body and in wisdom, gaining favour with God and people.`
    return (
        <Box alignItems="center" mt={2} mr="2" >

            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{
              uri: "https://w0.peakpx.com/wallpaper/291/931/HD-wallpaper-the-nativity-nativity-donkey-cow-joseph-christmas-savior-mary-jesus.jpg"
            }} alt="image" />
            </AspectRatio>

                    <Heading size="md" ml="-1">
                        {/* Today's reading */}
                    </Heading>
                    <Center bg="violet.500" _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        New Testomony
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            John 4:5-14
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            The Silicon Valley of India.
                        </Text>
                    </Stack>
                    <Text fontWeight="400">
                        {/* Bengaluru (also called Bangalore) is the center of India's high-tech
                        industry. The city is also known for its parks and nightlife. */}
                        {story.replace(/[0-9]/g, '').slice(0, 200)}
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                6 mins ago
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}

export default TodayReading