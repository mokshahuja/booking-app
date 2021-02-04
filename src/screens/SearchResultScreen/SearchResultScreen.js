import React from 'react'
import { View, Text , FlatList } from 'react-native'
import feed from '../../../assets/data/feed'
import Post from '../../components/Post'

export default function SearchResultScreen() {
    return (
        <FlatList 
        data={feed}
        renderItem={({item}) => <Post feed={item} key={item.id}/> }
        />
    )
}
