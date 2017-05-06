import React from 'react'
import { View, Text, ActivityIndicator, Animated, TextInput } from 'react-native'

export default class SomeComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'nothing'
        }
    }
    componentDidMount() {
        console.log('componentDidMount---')
        setTimeout(() => {
            console.log('timer---')
            this.setState({
                text: 'message after timer'
            })
        }, 1000)
    }
    render() {
        console.log('render---')
        return (
            <Animated.View>
                {/*{[1, 2, 3].map(x => <Text key={x}>{x}</Text>)}*/}
                <TextInput onChange={(event) => this.setState({ text: event.nativeEvent.text })} />
                <Text>{this.state.text}</Text>
                <ActivityIndicator />
            </Animated.View>
        )
    }
}