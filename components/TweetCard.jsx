import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";

const TweetCard = ({ tweetItem }) => {
	return (
		<Link href={`/feed/detail/${tweetItem.id}`} asChild>
			<Pressable style={styles.container}>
				<Image src={tweetItem.user.image} style={styles.userImage} />

				<View style={styles.mainContainer}>
					<View style={styles.flexBetween}>
						<View style={styles.flex}>
							<Text style={styles.name}>
								{tweetItem.user.name}
							</Text>
							<Text style={styles.userName}>
								@{tweetItem.user.username} · 8h
							</Text>
						</View>

						<Entypo
							name="dots-three-horizontal"
							size={13}
							color="grey"
							style={{ transform: "rotate(90deg)", opacity: 0.6 }}
						/>
					</View>

					<Text>{tweetItem.content}</Text>

					{tweetItem.image && (
						<Image src={tweetItem.image} style={styles.imageItem} />
					)}

					<View style={styles.listIcon}>
						<IconButton
							name="comment"
							text={tweetItem.numberOfLikes}
						/>
						<IconButton
							name="retweet"
							text={tweetItem.numberOfLikes}
						/>
						<IconButton
							name="heart"
							text={tweetItem.numberOfLikes}
						/>
						<IconButton
							name="chart"
							text={tweetItem.numberOfLikes}
						/>
						<Entypo
							name="share"
							size={15}
							color="grey"
							style={{ marginLeft: -8, marginTop: 1 }}
						/>
					</View>
				</View>
			</Pressable>
		</Link>
	);
};

export default TweetCard;

const styles = StyleSheet.create({
	userImage: {
		width: 50,
		height: 50,
		borderRadius: 30,
	},

	container: {
		flexDirection: "row",
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		backgroundColor: "white",
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
	flex: {
		flexDirection: "row",
		alignItems: "center",
	},
	flexBetween: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
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
