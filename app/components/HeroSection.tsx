export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1147] mb-4">
                Effortless Cloud Storage Backups for Azure
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 mb-8">
                ShieldSync automates cloud backups, protects against data loss, and ensures instant recovery
                with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#1a1147] text-white px-6 py-3 rounded-md font-medium">Start Free Trial</button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium">Watch Demo</button>
            </div>
        </section>
    )
}
