import { FlatList, StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import TweetCard from "../../components/TweetCard";
import allTweets from "../../assets/data/tweets";

export default function TabOneScreen() {
	return (
		<View>
			<FlatList
				data={allTweets}
				renderItem={({ item }) => <TweetCard tweetItem={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
