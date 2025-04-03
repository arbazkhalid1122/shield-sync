import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
                <div className="flex items-center mr-10">
                    <div className="h-6 w-6 bg-black rounded-full flex items-center justify-center mr-1">
                        <div className="h-3 w-3 bg-white rounded-full"></div>
                    </div>
                    <span className="font-semibold text-black">ShieldSync</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="#">Features</Link>
                    <Link href="#">Solutions</Link>
                    <Link href="#">Pricing</Link>
                    <Link href="#">FAQ</Link>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">Login</Link>
                <Link href="#" className="bg-[#1a1147] text-white px-4 py-2 rounded-md text-sm">Start Free Trial</Link>
            </div>
        </nav>
    )
}
