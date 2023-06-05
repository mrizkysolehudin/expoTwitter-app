import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import TweetCard from "../../../../../components/TweetCard";
import { useQuery } from "@tanstack/react-query";
import { getOneTweet } from "../../../../../utils/api";

const DetailScreen = () => {
	const { id } = useSearchParams();

	const { data, isLoading, error } = useQuery({
		queryKey: ["oneTweet", id],
		queryFn: () => getOneTweet(id),
	});

	if (isLoading) return <ActivityIndicator />;

	if (error) {
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

	return <TweetCard tweetItem={data} />;
};

export default DetailScreen;
