import { Text, View } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import allTweets from "../../../../../assets/data/tweets";
import TweetCard from "../../../../../components/TweetCard";

const DetailScreen = () => {
	const { id } = useSearchParams();

	const tweetDetail = allTweets.find((t) => t.id === id);
	if (!tweetDetail) {
		return (
			<View
				style={{
					marginTop: 240,
					flex: 1,
					justifyContent: "center",
					flexDirection: "row",
				}}>
				<Text style={{ fontWeight: 700, fontSize: 20 }}>
					Tweet {id} not found.{" "}
				</Text>
			</View>
		);
	}

	return <TweetCard tweetItem={tweetDetail} />;
};

export default DetailScreen;
