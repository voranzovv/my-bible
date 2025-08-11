import { View, Text, Button, Share } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, PlayIcon, ShareIcon } from 'native-base';
import * as Speech from 'expo-speech'


const Card = () => {

  const [todayVerse, setTodayVerse] = useState(null)
  useEffect(() => {
    // Axios.get('https://api.scripture.api.bible/v1/bibles/bibleId')
    // fetch('https://api.scripture.api.bible/v1/bibles/61fd76eafa1577c2-02/search?query=JER.29.11', 
    // fetch('https://bible-api.com/romans+12:1-2'

    fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=daily')
      .then((response) => response.json())
      .then((json) => setTodayVerse(json.verse))
      .catch((error) => console.error(error))

  }, [])

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          todayVerse?.details.reference + " |  " + todayVerse?.details.text,
        title: "Today's bible verse",
        options: {
          dialogTitle: "Today's bible verse",
          subject: "Today's bible verse",
        }

      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Box bg={{
      linearGradient: {
        colors: ['#4576d2', '#af97d8'],
        start: [0, 0],
        end: [1, 0]
      }
    }} p="4" rounded="xl" _text={{
      fontSize: 'md',
      fontWeight: 'medium',
      color: 'warmGray.50',
      textAlign: 'center'
    }}
      mt={2}
    >
      <Heading size="md" ml="-1" py='1'>
        Verse of the day
      </Heading>
      <PlayIcon size="5" mt="0.5" ml="-1" color="emerald.500" />
      <Box >
        {
          todayVerse?.details.reference
        }

      </Box>


      {
        todayVerse?.details.text
      }

      <Button title="Speak!" onPress={() => Speech.speak(todayVerse?.details.reference + ".........!!!    " + todayVerse?.details.text)} />
      {/* <Button title='Share' onPress={onShare} /> */}
      <Flex alignItems="flex-end">
        <ShareIcon onPress={onShare} size="5" mt="2" color="emerald.500" />
      </Flex>
    </Box>
  )
}

export default Card