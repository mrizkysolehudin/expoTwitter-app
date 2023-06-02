import {
	StyleSheet,
	TextInput,
	Pressable,
	Text,
	View,
	Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

const NewTweetScreen = () => {
	const user = {
		id: "u1",
		username: "mrizkysolehudin",
		name: "rizky",
		image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
	};

	const router = useRouter();
	const [inputNewTweet, setInputNewTweet] = useState("");

	const handlePostingTweet = () => {
		setInputNewTweet(inputNewTweet);
		console.warn("Posting the tweet ", inputNewTweet);

		router.back();
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<View style={{ marginTop: 17, marginHorizontal: 10 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 10,
					}}>
					<Link href="../">
						<Entypo name="cross" size={25} />
					</Link>

					<Pressable
						onPress={handlePostingTweet}
						style={styles.tweetButtonWrapper}>
						<Text style={styles.tweetButton}>Tweet</Text>
					</Pressable>
				</View>

				<View style={{ height: 100 }}>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}>
						<Image
							src={user.image}
							style={{ width: 50, height: 50, borderRadius: 30 }}
						/>

						<Pressable
							style={{
								borderWidth: 1,
								borderColor: "#1C9BF0",
								borderRadius: 13,
								height: 30,
								paddingHorizontal: 10,
								justifyContent: "center",
								marginLeft: 10,
							}}>
							<Text
								style={{
									color: "#1C9BF0",
									fontWeight: 600,
								}}>
								Semua pengikut{" "}
								<Entypo name="chevron-down" size={15} />
							</Text>
						</Pressable>
					</View>

					<TextInput
						value={inputNewTweet}
						onChange={setInputNewTweet}
						placeholder="Apa yang sedang terjadi?"
						multiline
						numberOfLines={6}
						style={{ flex: 1, marginLeft: 60 }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default NewTweetScreen;

const styles = StyleSheet.create({
	tweetButtonWrapper: {
		backgroundColor: "#1C9BF0",
		paddingHorizontal: 20,
		paddingVertical: 6,
		borderRadius: 50,
	},
	tweetButton: {
		color: "white",
		fontWeight: "600",
		fontSize: 16,
	},
});
