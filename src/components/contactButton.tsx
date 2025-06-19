import Link from "next/link";

export default function ContactButton({ buttonText, className }: { buttonText: string, className?: string }) {
    return (
        <div className={`text-center ${className}`}>
            <Link href="/contact" className="btn btn-primary font-normal px-8">
                {buttonText}
            </Link>
        </div>
    );
}