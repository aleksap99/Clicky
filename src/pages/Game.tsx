import { Box, Text, useDisclosure } from "@chakra-ui/react";
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
      <Box m={4}>
        <Text color="red" fontSize="2xl">Project still in development</Text>
        <Text color="gray.300">Check out the combat, woodcutting and mining pages</Text>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Game;
