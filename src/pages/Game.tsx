import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Nav from "../features/nav/Nav";
import Topbar from "../features/nav/topbar/Topbar";

const Game = () => {
	//const dispatch = useAppDispatch();
	const {
		isOpen: isSidebarOpen,
		onOpen: onSidebarOpen,
		onClose: onSidebarClose,
	} = useDisclosure();


	return (
		<Box>
			<nav>
				<Topbar onSidebarOpen={onSidebarOpen} />
				<Nav
					isSidebarOpen={isSidebarOpen}
					onSidebarOpen={onSidebarOpen}
					onSidebarClose={onSidebarClose}
				/>
			</nav>
			<Box>
				{/*	<Routes>
					 <Route path="/game/activities" exact render={() => <ActivityPage />} /> 

					<Route path="/game/inventory" element={<InventoryPage />} />
					<Route path="/game/profile" exact render={() => <ProfilePage />} />
					<Route
						path="/game/rest"
						exact
						render={() => (
							<p style={{ color: "white" }}>Not implemented</p>
						)}
					/> 
					<Route path="/game/woodcutting" exact render={() => (<Tasks skillName={"Woodcutting"} />)} />
					<Route path="/game/mining" exact render={() => (<Tasks skillName={"Mining"} />)} />
					<Route path="/game/smelting" exact render={() => (<Smelting />)} />
					<Route path="/game/fishing" exact render={() => (<Tasks skillName={"Fishing"} />)} />
					<Route path="/game/herbalism" exact render={() => (<Tasks skillName={"Herbalism"} />)} />
					<Route path="/game/farming" exact render={() => (<Tasks skillName={"Farming"} />)} />
					<Route path="/game/hunting" exact render={() => (<Hunting />)} />
					<Route path="/game/butchering" exact render={() => (<Butchering />)} />
					<Route path="/game/firemaking" exact render={() => (<Firemaking />)} />
					<Route path="/game/cooking" exact render={() => (<Cooking />)} />
					<Route
						path="/game/leatherworking"
						exact
						render={() => (
							<CraftingPane skillName={"Leatherworking"}>
								<LeatherSvg />
							</CraftingPane>
						)}
					/>
					<Route
						path="/game/armorsmithing"
						exact
						render={() => (
							<CraftingPane skillName="Armorsmithing">
								<ArmorSvg />
							</CraftingPane>
						)}
					/>
					<Route
						path="/game/weaponsmithing"
						exact
						render={() => (
							<CraftingPane skillName={"Weaponsmithing"}>
								<WeaponSvg />
							</CraftingPane>
						)}
					/>
					<Route
						path="/game/jewelcrafting"
						exact
						render={() => (
							<CraftingPane skillName={"Jewelcrafting"}>
								<JewelSvg />
							</CraftingPane>
						)}
					/>
					<Route
						path="/game/enchanting"
						exact
						render={() => (<Tasks skillName="Enchanting" />)}
					/>
					<Route path="/game/combat" exact render={() => <CombatPage />} />
					<Route path="/game/dungeons" exact render={() => <Dungeons />} />
					<Route path="/game/auction" exact render={() => <AuctionHouse />} /> 
				</ Routes> */}
				<Outlet />
			</Box>
		</Box>
	);
};

export default Game;
