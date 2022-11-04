import { Collapse, Flex, Stack, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SidebarItem = ({ label, subItems }: any) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={subItems && onToggle}>
			<Flex
				py={2}
				justify={'space-between'}
				align={'center'}
				_hover={{
					cursor: 'pointer',
				}}>
				<Text fontWeight={600}>
					{label}
				</Text>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} align={'start'}>
					{subItems && subItems.map((child: any) => <>
						{
							child.implemented ?
								(<Link key={child.label} to={child.to}>
									{child.label}
								</Link>) :
								(<Tooltip key={child.label} label="Not implemented">
									<Text as="span">{child.label}</Text>
								</Tooltip>
								)
						}
					</>)
					}
				</Stack>
			</Collapse>
		</Stack>
	);
};

export default SidebarItem;
