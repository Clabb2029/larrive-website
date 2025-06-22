import { PageLayout } from "@/components/PageLayout";
import TextBlock from "@/components/textBlock";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Contact() {

    const link = "https://www.google.fr/maps/place/LARRIV%C4%96+JEAN+CLAUDE/@47.7924387,3.5668819,563m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47ee4f5125b4e907:0x77197abd675a70f1!8m2!3d47.7924351!4d3.5694568!16s%2Fg%2F11y4nwzr6c?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D";

    return (
        <PageLayout className="p-10">
            <div className="w-fit">
                <h1 className="mb-10 text-4xl parisienne-regular text-primary">Me contacter</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col md:flex-row lg:flex-col col-span-1 md:col-span-2 lg:col-span-1 gap-6 justify-evenly">
                        <TextBlock placement="bottom-right" hasBackground={false} className="w-full md:w-1/2 lg:w-full p-4">Je suis ouvert aux propositions, et je propose des conseils et devis gratuits, donc n’hésitez pas à me contacter via les coordonnées ou via le formulaire de contact suivants.</TextBlock>
                        <div className="card bg-base-200 p-4 rounded-xl w-full md:w-1/2 lg:w-full flex sm:flex-row sm:items-center gap-4">
                            <Image src="/profile.jpg" height={100} width={100} alt="Photographie de Jean-Claude Larrivé" className="rounded-xl w-full sm:w-fit" />
                            <div className="flex flex-col justify-between h-full gap-6 sm:gap-0">
                                <div>
                                    <h2 className="font-bold">Jean-Claude LARRIVÉ</h2>
                                    <p className="text-xs group">E-mail : <a href="mailto:jc.larrive@orange.fr">jc.larrive@orange.fr<ExternalLink className="inline-block h-[1em] w-[1em] align-text-bottom opacity-0 group-hover:opacity-50 transition-opacity duration-200 ms-1" /></a></p>
                                    <p className="text-xs group">Tél : <a href="tel:0687125385">06 87 12 53 85<ExternalLink className="inline-block h-[1em] w-[1em] align-text-bottom opacity-0 group-hover:opacity-50 transition-opacity duration-200 ms-1" /></a></p>
                                </div>
                                <div>
                                    <h2 className="font-bold">ATELIER</h2>
                                    <p className="text-xs group"><a href={link} target="_blank">28 rue Haute-Perrière<ExternalLink className="inline-block h-[1em] w-[1em] align-text-bottom opacity-0 group-hover:opacity-50 transition-opacity duration-200 ms-1" /></a></p>
                                    <p className="text-xs">89000 Auxerre</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-200 p-8 rounded-xl col-span-1 md:col-span-2 gap-6">
                        <div className="flex flex-col md:flex-row flex-1 gap-4">
                            <div className="flex flex-col flex-1">
                                <label htmlFor="name">Nom</label>
                                <input type="text" id="name" placeholder="Saisissez votre nom complet" className="input input-sm border-none rounded-lg w-full" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Saisissez votre adresse email" className="input input-sm border-none rounded-lg w-full" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="object">Objet</label>
                            <input type="text" id="object" placeholder="Saisissez l'objet de votre message" className="input input-sm border-none rounded-lg w-full" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Saisissez votre message" className="textarea input-sm border-none rounded-lg resize-none w-full"></textarea>
                        </div>
                        <button className="btn bg-base-300 font-normal px-8 text-base-100 mx-auto hover:brightness-85">Envoyer</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </PageLayout>
    )
}