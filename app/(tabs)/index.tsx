import { FlatList, StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import TweetCard from "../../components/TweetCard";
import allTweets from "../../assets/data/tweets";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function TabOneScreen() {
	return (
		<View>
			<FlatList
				data={allTweets}
				renderItem={({ item }) => <TweetCard tweetItem={item} />}
			/>

			<Link href="new-tweet" asChild>
				<Entypo
					name="plus"
					size={24}
					color="white"
					style={styles.newTweetButton}
				/>
			</Link>
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
	newTweetButton: {
		backgroundColor: "#1C9BF0",

		position: "absolute",
		bottom: 20,
		right: 20,

		padding: 14,
		borderRadius: 30,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 7,

		overflow: "hidden",
	},
});
