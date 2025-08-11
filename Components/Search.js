import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Center, CheckIcon, FormControl, Input, Radio, Select, Stack, VStack, WarningOutlineIcon } from 'native-base';
import OT from '../assets/old-testament.json'

export default function Search() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [value, setValue] = React.useState('one');
    

    const validate = () => {
        if (formData.name === undefined) {
            setErrors({
                ...errors,
                name: 'Name is required'
            });
            return false;
        } else if (formData.name.length < 3) {
            setErrors({
                ...errors,
                name: 'Name is too short'
            });
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        validate() ? console.log('Submitted') : console.log('Validation Failed');
    };
    return (
        <VStack mx="3" >
            <FormControl isRequired isInvalid={'name' in errors}>
                <Center>
                    <FormControl isRequired isInvalid>
                        <Radio.Group
                            name="myRadioGroup"
                            value={value}
                            onChange={(nextValue) => {
                                setValue(nextValue);
                            }}
                        >
                            <Radio value="one" my="1">
                                One
                            </Radio>
                            <Radio value="two" my="1">
                                Two
                            </Radio>
                        </Radio.Group>
                        <FormControl.Label>Book</FormControl.Label>
                        <Select minWidth="200" size={"2xl"} accessibilityLabel="Select book" placeholder="Select book" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />
                        }} mt="1">
                            {
                                OT.books.map(b =>
                                    // console.log(b.books)
                                    <Select.Item label={b.book} value={b.book} id={b.book} />
                                )
                            }
                            {/* <Select.Item label="Web Development" value="web" />
                            <Select.Item label="Cross Platform Development" value="cross" />
                            <Select.Item label="UI Designing" value="ui" />
                            <Select.Item label="Backend Development" value="backend" /> */}
                        </Select>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Please make a selection!
                        </FormControl.ErrorMessage>

                        <Select size={"2xl"} accessibilityLabel="Select book" placeholder="Select book" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />
                        }} mt="1">
                            {
                                OT.books.map(b =>
                                    // <Select.Item label={b.book} value={b.book} />
                                    <Select.Item label="UX Research" value="ux" id={b.book} />
                                )
                            }

                        </Select>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Please make a selection!
                        </FormControl.ErrorMessage>
                    </FormControl>
                </Center>
                <FormControl.Label _text={{
                    bold: true
                }}>Name</FormControl.Label>
                <Input placeholder="John" size="2xl" onChangeText={value => setData({
                    ...formData,
                    name: value
                })} />
                {'name' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
                    Name should contain atleast 3 character.
                </FormControl.HelperText>}
            </FormControl>
            <Button onPress={onSubmit} mt="5" colorScheme="cyan">
                Submit
            </Button>
        </VStack>
    )
}