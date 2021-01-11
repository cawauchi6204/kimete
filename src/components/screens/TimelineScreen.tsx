import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { PostCard } from '../Common/PostCard'

type Props = {};

export const TimelineScreen: React.FC<Props> = ({ }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
    marginLeft: 30
  },
});
