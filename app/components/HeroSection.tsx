export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1a1147] mb-4 leading-tight">
                Effortless Cloud Storage Backups for
                <span className="inline md:block">
                    <span className="bg-gradient-to-r ml-[10px] from-[#1a1147] via-gray-500 to-gray-300 bg-clip-text text-transparent">
                        Azure
                    </span>
                </span>
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 mb-8">
                ShieldSync automates cloud backups, protects against data loss, and ensures instant recovery,
                all with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#1a1147] text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-[#100a3d] transition">
                    Start Free Trial
                </button>
                <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                    Watch Demo
                </button>
            </div>
        </section>
    )
}
