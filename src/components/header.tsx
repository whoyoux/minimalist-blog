import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
	return (
		<header className="w-full flex items-center justify-between py-5 border-b mb-4">
			<h1 className="font-semibold text-lg">Header</h1>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
