import { createDrawerNavigator } from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
	initialRouteName: "(tabs)",
};

const DrawerLayout = () => {
	return <Drawer />;
};

export default DrawerLayout;
