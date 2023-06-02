import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useNavigation } from "expo-router";
import { Pressable, Image, useColorScheme } from "react-native";

import Colors from "../../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export const unstable_settings = {
	initialRouteName: "two",
};

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const AvatarProfileHeader = () => {
	const navigation = useNavigation();

	return (
		<Pressable onPress={() => navigation.openDrawer()}>
			<Image
				src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg"
				style={{
					width: 25,
					height: 25,
					borderRadius: 30,
					marginLeft: 9,
					marginRight: 120,
				}}
			/>
		</Pressable>
	);
};

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
			}}>
			<Tabs.Screen
				name="feed"
				options={{
					title: "Feed",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="code" color={color} />
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="info-circle"
										size={25}
										color={
											Colors[colorScheme ?? "light"].text
										}
										style={{
											marginRight: 15,
											opacity: pressed ? 0.5 : 1,
										}}
									/>
								)}
							</Pressable>
						</Link>
					),
					headerLeft: () => <AvatarProfileHeader />,
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: "Tab Two",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="code" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
