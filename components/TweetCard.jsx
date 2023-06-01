import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";

const TweetCard = ({ tweetItem }) => {
	return (
		<View style={styles.container}>
			<Image src={tweetItem.user.image} style={styles.userImage} />

			<View style={styles.mainContainer}>
				<View style={styles.flexRow}>
					<Text style={styles.name}>{tweetItem.user.name}</Text>
					<Text style={styles.userName}>
						@{tweetItem.user.username}
					</Text>
				</View>

				<Text>{tweetItem.content}</Text>

				{tweetItem.image && (
					<Image src={tweetItem.image} style={styles.imageItem} />
				)}

				<View style={styles.listIcon}>
					<IconButton name="comment" text={tweetItem.numberOfLikes} />
					<IconButton name="retweet" text={tweetItem.numberOfLikes} />
					<IconButton name="heart" text={tweetItem.numberOfLikes} />
					<IconButton name="chart" text={tweetItem.numberOfLikes} />

					<Entypo
						name="share"
						size={15}
						color="grey"
						style={{ marginLeft: -8, marginTop: 1 }}
					/>
				</View>
			</View>
		</View>
	);
};

export default TweetCard;

const styles = StyleSheet.create({
	userImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},

	container: {
		flexDirection: "row",
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: "lightgrey",
	},
	mainContainer: {
		paddingLeft: 10,
		flex: 1,
	},
	name: {
		fontSize: 15,
		fontWeight: 700,
	},
	userName: {
		marginLeft: 4,
		color: "grey",
	},
	flexRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	imageItem: {
		width: "100%",
		height: 180,
		borderRadius: 7,
		marginTop: 6,
	},
	listIcon: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 8,
		marginRight: 10,
	},
});
