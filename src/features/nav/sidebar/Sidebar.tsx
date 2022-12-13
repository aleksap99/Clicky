import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Stack } from "@chakra-ui/react";
import Locations from "../../traveling/components/Locations";
//import LogoutButton from "../../buttons/LogoutButton";
import SidebarItem from "./SidebarItem";

const baseUrl = process.env.REACT_APP_NAV_BASE;

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
                <Locations />
                {/*	<LogoutButton /> */}
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
      { label: "Activities", to: `/${baseUrl}/activities`, implemented: true },
      { label: "Inventory", to: `/${baseUrl}/inventory`, implemented: true },
      { label: "Profile", to: `/${baseUrl}/profile`, implemented: true },
    ]
  },
  {
    label: "Skills",
    children: [
      { label: "Rest", to: `/${baseUrl}/rest`, implemented: false },
      { label: "Camping", to: `/${baseUrl}/camping`, implemented: false },
      { label: "Woodcutting", to: `/${baseUrl}/woodcutting`, implemented: true },
      { label: "Mining", to: `/${baseUrl}/mining`, implemented: true },
      { label: "Smelting", to: `/${baseUrl}/smelting`, implemented: true },
      { label: "Fishing", to: `/${baseUrl}/fishing`, implemented: true },
      { label: "Herbalism", to: `/${baseUrl}/herbalism`, implemented: false },
      { label: "Firemaking", to: `/${baseUrl}/firemaking`, implemented: true },
      { label: "Farming", to: `/${baseUrl}/farming`, implemented: false },
      { label: "Hunting", to: `/${baseUrl}/hunting`, implemented: true },
      { label: "Butchering", to: `/${baseUrl}/butchering`, implemented: true },
      { label: "Cooking", to: `/${baseUrl}/cooking`, implemented: true },
      { label: "Leatherworking", to: `/${baseUrl}/leatherworking`, implemented: false },
      { label: "Armorsmithing", to: `/${baseUrl}/armorsmithing`, implemented: false },
      { label: "Weaponsmithing", to: `/${baseUrl}/weaponsmithing`, implemented: true },
      { label: "Jewelcrafting", to: `/${baseUrl}/jewelcrafting`, implemented: false },
    ]
  },
  {
    label: "Combat",
    children: [
      { label: "Combat", to: `/${baseUrl}/combat`, implemented: true },
      { label: "Dungeons", to: `/${baseUrl}/dungeons`, implemented: false },
      { label: "Combat skills", to: `/${baseUrl}/notImplemented`, implemented: false },
    ]
  },
  {
    label: "Commerce",
    children: [
      { label: "Auction house", to: `/${baseUrl}/auction`, implemented: false },
      { label: "Open trading", to: `/${baseUrl}/notImplemented`, implemented: false },
      { label: "Personal trading", to: `/${baseUrl}/notImplemented`, implemented: false },
    ]
  },
  {
    label: "Community",
    children: [
      { label: "Chat", to: `/${baseUrl}/notImplemented`, implemented: false },
      { label: "Messages", to: `/${baseUrl}/notImplemented`, implemented: false },
    ]
  }
];

export default Sidebar;
