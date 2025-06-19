import Footer from "./footer";
import Navbar from "./navbar";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col">
            <Navbar />
            <div className="w-full p-10 flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
}