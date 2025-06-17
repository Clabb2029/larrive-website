import Link from "next/link";

export default function ContactButton({ buttonText }: { buttonText: string }) {
    return (
        <div className="text-center">
            <Link href="/contact" className="btn btn-primary font-normal px-8">
                {buttonText}
            </Link>
        </div>
    );
}