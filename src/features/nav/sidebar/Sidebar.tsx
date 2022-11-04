import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Stack } from "@chakra-ui/react";
//import Locations from "../../../locations/components/Locations";
//import LogoutButton from "../../buttons/LogoutButton";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ isSidebarOpen, onSidebarOpen, onSidebarClose }: any) => {
	return (
		<>
			<Drawer isOpen={isSidebarOpen} placement='left' onClose={onSidebarClose}>
				<DrawerOverlay />
				<DrawerContent bg="gray.700">
					<DrawerCloseButton />
					<DrawerBody>
						<Box>
							<Stack bg="gray.700" p={4} color="white">
								{NAV_ITEMS.map((navItem) => (
									<SidebarItem key={navItem.label} label={navItem.label} subItems={navItem.children} />
								))}
								{/*<Locations />
									<LogoutButton /> */}
							</Stack>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
};

const NAV_ITEMS = [
	{
		label: "Character",
		children: [
			{ label: "Activities", to: "/game/activities", implemented: true },
			{ label: "Inventory", to: "/game/inventory", implemented: true },
			{ label: "Profile", to: "/game/profile", implemented: true },
		]
	},
	{
		label: "Skills",
		children: [
			{ label: "Rest", to: "/game/rest", implemented: false },
			{ label: "Camping", to: "/game/camping", implemented: false },
			{ label: "Woodcutting", to: "/game/woodcutting", implemented: true },
			{ label: "Mining", to: "/game/mining", implemented: true },
			{ label: "Smelting", to: "/game/smelting", implemented: true },
			{ label: "Fishing", to: "/game/fishing", implemented: true },
			{ label: "Herbalism", to: "/game/herbalism", implemented: false },
			{ label: "Firemaking", to: "/game/firemaking", implemented: true },
			{ label: "Farming", to: "/game/farming", implemented: false },
			{ label: "Hunting", to: "/game/hunting", implemented: true },
			{ label: "Butchering", to: "/game/butchering", implemented: true },
			{ label: "Cooking", to: "/game/cooking", implemented: true },
			{ label: "Leatherworking", to: "/game/leatherworking", implemented: false },
			{ label: "Armorsmithing", to: "/game/armorsmithing", implemented: false },
			{ label: "Weaponsmithing", to: "/game/weaponsmithing", implemented: true },
			{ label: "Jewelcrafting", to: "/game/jewelcrafting", implemented: false },
		]
	},
	{
		label: "Combat",
		children: [
			{ label: "Combat", to: "/game/combat", implemented: true },
			{ label: "Dungeons", to: "/game/dungeons", implemented: false },
			{ label: "Combat skills", to: "/game/notImplemented", implemented: false },
		]
	},
	{
		label: "Commerce",
		children: [
			{ label: "Auction house", to: "/game/auction", implemented: false },
			{ label: "Open trading", to: "/game/notImplemented", implemented: false },
			{ label: "Personal trading", to: "/game/notImplemented", implemented: false },
		]
	},
	{
		label: "Community",
		children: [
			{ label: "Chat", to: "/game/notImplemented", implemented: false },
			{ label: "Messages", to: "/game/notImplemented", implemented: false },
		]
	}
];

export default Sidebar;
