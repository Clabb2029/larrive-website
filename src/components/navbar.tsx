import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const pathname = usePathname();

    const links = [
        { href: "/", label: "Accueil" },
        { href: "/realisations", label: "Réalisations" },
        { href: "/materiaux", label: "Matériaux" },
        { href: "/cours", label: "Cours" },
        { href: "/contact", label: "Contact" },
    ];

    const handleMenuClick = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="sticky top-0 z-50">
            <nav className="relative px-4 py-2 flex justify-between items-center bg-primary text-base-300">
                <Link href="/">
                    <Image src="/logo.png" height={30} width={30} alt="Logo du site" className="filter invert brightness-0"/>
                </Link>
                <Menu onClick={handleMenuClick} className="md:hidden cursor-pointer hover:text-base-100"/>

                <div className="hidden md:flex md:ms-auto md:items-end md:w-auto md:space-x-2">
                    {links.map(({ href, label }) => {
                        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`border-b-2 border-transparent hover:text-base-100 transition-colors duration-300 transform hover:border-base-100 mx-1.5 sm:mx-3
                                    ${isActive ? "text-base-100" : ""}`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div
                    className="absolute inset-0 bg-gray-800 opacity-50 transition-opacity duration-300"
                    onClick={() => setMenuOpen(false)}
                ></div>
                <nav
                    className={`
                        bg-primary text-base-100 fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm px-4 py-2 border-r overflow-y-auto
                        transform transition-transform duration-300 z-50
                        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                    `}
                >
                    <div className="flex items-center">
                        <Link href="/" className="mr-auto">
                            <Image src="/logo.png" height={30} width={30} alt="Logo du site" className="filter invert brightness-0"/>
                        </Link>
                        <X onClick={() => setMenuOpen(false)} className="cursor-pointer"/>
                    </div>
                    <div className="flex flex-col mt-10 space-y-8 p-8">
                        {links.map(({ href, label }) => {
                            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`w-fit ${isActive ? "border-b-2 border-b-base-100" : ""}`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </div>
    );
}