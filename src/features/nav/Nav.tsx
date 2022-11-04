import Sidebar from './sidebar/Sidebar';

// TODO: Figure out how to display icons next to sidebar items
const Nav = ({ isSidebarOpen, onSidebarOpen, onSidebarClose }: any) => {
	return (
		<Sidebar isSidebarOpen={isSidebarOpen} onSidebarOpen={onSidebarOpen} onSidebarClose={onSidebarClose} />
	)
}

export default Nav
