import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {

    return (
        <footer className="bg-base-content text-base-100 text-xs">
            <div className="container px-6 py-4 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-y-10">
                    <Image src="/logo.png" height={60} width={60} alt="Website logo" className="col-span-1 filter invert brightness-0 mx-auto my-auto"/>
                    <div className="flex flex-col lg:flex-row items-stretch col-span-1 lg:col-span-4 w-fit lg:w-full mx-auto divide-y lg:divide-y-0 divide-base-100 lg:divide-x">
                        <div className="flex flex-row items-center lg:justify-center flex-1 lg:pe-8 py-2">
                            <MapPin size={30} className="me-3"/>
                            <div>
                                <p className="font-bold">ADRESSE</p>
                                <p>26 rue Haute-Perrière, 89000 Auxerre</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center lg:justify-center flex-1 py-2">
                            <Phone size={30} className="me-3"/>
                            <div>
                                <p className="font-bold">TÉLÉPHONE</p>
                                <p>06 87 12 53 85</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center lg:justify-center flex-1 py-2">
                            <Mail size={30} className="me-3"/>
                            <div>
                                <p className="font-bold">E-MAIL</p>
                                <p>jc.larrive@orange.fr</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="p-4 text-center">{new Date().getFullYear()}, Atelier Jean-Claude Larrivé. Tous droits réservés.</p>
        </footer>
    )
}