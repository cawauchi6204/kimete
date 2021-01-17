import React from "react";
import { ScrollView,StyleSheet } from "react-native"

import { PostCard } from './PostCard'

type Props = {
}

export const PostCardList: React.FC<Props> = ({ }) => {
  return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})
