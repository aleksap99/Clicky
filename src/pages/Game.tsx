import { Box, Checkbox, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../features/nav/Nav";
import Topbar from "../features/nav/topbar/Topbar";
import PrimaryButton from "../util/components/PrimaryButton";

const Game = () => {
  const {
    isOpen: isSidebarOpen,
    onOpen: onSidebarOpen,
    onClose: onSidebarClose,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dontShowNewsChecked, setDontShowNewsChecked] = useState<boolean>(false);
  useEffect(() => {
    const dontShowNews = localStorage.getItem("dontShowNews");
    if (dontShowNews !== "true") {
      onOpen();
    }
  }, [])

  const handleNewsOk = () => {
    if (dontShowNewsChecked) {
      localStorage.setItem("dontShowNews", "true")
    }
    onClose();
  }

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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderTopRadius={15} color="gray.300" bg="#3a3b47">News</ModalHeader>
          <ModalCloseButton />
          <ModalBody color="gray.300" bg={"#3c4b64"}>
            <Text color="red" fontSize="2xl">Project still in development</Text>
            <Text color="gray.300">Check out the inventory, combat, traveling, woodcutting and mining pages</Text>
          </ModalBody>

          <ModalFooter borderBottomRadius={15} bg="#3a3b47">
            <Checkbox onChange={(e) => setDontShowNewsChecked(e.target.checked)} color="gray.300">Dont show again</Checkbox>
            <PrimaryButton ml={3} text="Ok" onClick={handleNewsOk} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Game;
