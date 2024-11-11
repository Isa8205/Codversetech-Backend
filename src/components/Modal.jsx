import { X } from "lucide-react";

export function Modal() {
    return (
        <div className="fixed modal-box h-screen w-screen z-50 grid place-items-center" style={{ background: 'rgba(0,0,0, .5)' }}>
            <div className="bg-white rounded px-9  h-1/4 w-2/3 text-center">
                <div className="header flex justify-between items-center">
                    <h3 className="text-orange-500 text-3xl font-bold">Modal</h3>
                    <X className="bg-red-500 text-white rounded-sm cursor-pointer hover:bg-red-400" />
                </div>
            </div>
        </div>
    )
}