import Footer from "./footer";
import Navbar from "./navbar";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <div className="container p-6">
                {children}
            </div>
            <Footer />
        </div>
    );
}