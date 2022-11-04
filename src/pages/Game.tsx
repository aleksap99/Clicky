import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Nav from "../features/nav/Nav";
import Topbar from "../features/nav/topbar/Topbar";

const Game = () => {
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
				<Outlet />
			</Box>
		</Box>
	);
};

export default Game;
