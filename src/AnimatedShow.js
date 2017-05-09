import React from 'react'
import { View, Text, Animated, Easing } from 'react-native';


export default class AnimatedShow extends React.Component {
    constructor(props) {
        super(props)

    }
    componentWillMount() {
        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.bounce
        }).start()
    }
    render() {
        return (
            <View testID={'animated-text-1'} style={{ opacity: this.animatedValue }}>
                <Text>animated text</Text>
            </View>
        )
    }
}