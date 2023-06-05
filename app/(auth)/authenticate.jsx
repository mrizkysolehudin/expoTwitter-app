import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";

const AuthenticateScreen = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}>
			<View
				style={{
					flex: 1 / 2,
					width: "80%",
					marginHorizontal: 20,
					alignItems: "center",
				}}>
				<Text style={{ fontSize: 30, fontWeight: 600 }}>
					Confirm your email
				</Text>

				<TextInput
					placeholder="enter code"
					style={{
						borderWidth: 1,
						width: "80%",
						borderColor: "#1C9BF0",
						paddingHorizontal: 10,
						borderRadius: 3,
						marginTop: 20,
						paddingBottom: 1,
						fontSize: 17,
					}}
				/>

				<Pressable
					style={{
						backgroundColor: "#1C9BF0",
						width: "80%",
						alignItems: "center",
						height: 32,
						justifyContent: "center",
						paddingBottom: 2,
						borderRadius: 3,
						marginTop: 20,
					}}>
					<Text
						style={{
							color: "white",
							fontSize: 17,
							fontWeight: 500,
						}}>
						Confirm
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default AuthenticateScreen;
