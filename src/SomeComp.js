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
        setTimeout(() => {
            this.setState({
                text: 'message after first timer'
            })
        }, 1000)

        setTimeout(() => {
            this.setState({
                text: 'message after second timer'
            })
        }, 2000)
    }
    render() {
        return (
            <Animated.View>
                {[1, 2, 3].map(x => <Text testID={`test-${x}`} key={x}>{x}</Text>)}
                <TextInput onChange={(event) => this.setState({ text: event.nativeEvent.text })} />
                <Text testID={'state-text'}>{this.state.text}</Text>
                <ActivityIndicator />
            </Animated.View>
        )
    }
}