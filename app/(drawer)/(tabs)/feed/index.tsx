import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from "react-native";
import TweetCard from "../../../../components/TweetCard";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { getAllTweets } from "../../../../utils/api";

export default function FeedScreen() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["allTweets"],
		queryFn: getAllTweets,
	});

	if (isLoading) return <ActivityIndicator />;

	if (error) return <Text>{error.message}</Text>;

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={data}
				renderItem={({ item }) => <TweetCard tweetItem={item} />}
			/>

			<Link
				href="new-tweet"
				asChild
				style={{
					position: "absolute",
					bottom: 20,
					right: 20,
				}}>
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
