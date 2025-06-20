import { Scissors } from "lucide-react";

export default function TextBlock({ placement, children, className }: { placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'right' | 'left', children?: React.ReactNode, className?: string }) {
    return (
        <div className={`relative outline-1 outline-base-300 outline-dashed bg-base-200 p-2 ${className}`}>
            { placement && (
                <div
                    className={`
                        absolute text-base-300 p-1
                        ${ placement === 'top-left' ? '-top-3 left-1' :
                        placement === 'top-right' ? '-top-3 right-1' :
                        placement === 'bottom-left' ? '-bottom-3 left-1' :
                        placement === 'bottom-right' ? '-bottom-3 right-1' :
                        placement === 'left' ? '-left-3 top-2/3 transform -translate-y-1/2 rotate-90' :
                        placement === 'right' ? '-right-3 top-2/3 transform -translate-y-1/2 -rotate-90' : '' }
                    `}
                >
                    <Scissors size={15}/>
                </div>
            )}            
            <div className="text-justify">{ children }</div>
        </div>
    );
}