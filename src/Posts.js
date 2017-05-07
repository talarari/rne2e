                                                                                            import React from 'react'
import {ScrollView,Text} from 'react-native'

export default class Posts extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            posts:[]
        }
    }

    async componentDidMount(){
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();

        this.setState({posts})

    }
    render(){
        return (
        <ScrollView>
            {this.state.posts.map(p=> (<Text testID={`post-${p.id}`} key={p.id}> {p.title} </Text>))}
        </ScrollView>
        )
    }
}