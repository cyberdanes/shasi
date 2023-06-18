import React from "react";
import {View, Text, Image, ScrollView, TextInput} from 'react-native'

const HomePage = () => {
    return (
        <ScrollView style={{padding:20}}>
            <Text>Hello Shaurya</Text>
            <View>
                <Text>Hello Siya</Text>
                <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}} style={{width:200, height:200}} />
            </View>
            <TextInput
            style={{
                height:40,
                borderColor:'gray',
                borderWidth:1,
            }}
            defaultValue="What's up?"
            />
        </ScrollView>
    );
};

export default HomePage