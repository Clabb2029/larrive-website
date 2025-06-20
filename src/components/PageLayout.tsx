import Footer from "./footer";
import Navbar from "./navbar";

export const PageLayout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col">
            <Navbar />
            <div className={`w-full flex-1 flex ${className}`}>
                {children}
            </div>
            <Footer />
        </div>
    );
}