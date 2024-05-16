import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
	return (
		<header className="w-full flex items-center justify-between py-5 border-b mb-4">
			<Link href="/">
				<h1 className="font-semibold text-lg">{siteConfig.baseTitle}</h1>
			</Link>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
