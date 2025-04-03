import Image from "next/image"
import FeatureCard from "./FeatureCard"

export default function FeaturesGrid() {
    return (
        <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Rapid, reliable recovery */}
            <div className="bg-[#9b9ac7] rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Rapid, reliable recovery</h3>
                <p className="text-sm mb-6">
                    Restore your data in minutes, not hours, to your entire production restore complete with network
                    configurations in seconds.
                </p>

                <div className="bg-white rounded-lg p-4 text-black mb-4 max-w-xs">
                    <div className="text-sm font-medium mb-1">Capture VPC Settings</div>
                    <div className="text-xs">Automatically capture changes in network configurations</div>
                </div>

                <div className="flex space-x-2">
                    <div className="bg-white rounded-lg p-2 text-xs text-black">
                        <div className="font-medium">Off-of-encrypted resources</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-xs text-black">
                        <div className="font-medium">Orchestrated recoveries</div>
                    </div>
                </div>
            </div>

            {/* Card 2 - Automated cost savings */}
            <div className="bg-[#9b9ac7] rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Automated cost savings</h3>
                <p className="text-sm mb-6">
                    Save on egress and transfer costs automatically — with NIST Resource Control, storage-optimized archiving
                    and ZeroRTO.
                </p>

                <div className="flex justify-between">
                    <div className="bg-white rounded-lg p-3 text-black text-center w-36">
                        <div className="text-xs text-gray-500">Monthly savings</div>
                        <div className="text-2xl font-bold">$1,248</div>
                        <div className="text-sm">75%</div>
                    </div>

                    <div className="bg-white rounded-lg p-3 text-black text-center w-36">
                        <div className="text-xs text-gray-500">Storage savings</div>
                        <div className="text-2xl font-bold">98%</div>
                    </div>
                </div>
            </div>

            {/* Card 3 - Data sovereignty and security */}
            <div className="bg-[#9b9ac7] rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Data sovereignty and security</h3>
                <p className="text-sm mb-6">
                    Reduce your attack surface. Get total control over your environment with NIST, for complete peace of mind.
                </p>

                <div className="bg-white rounded-lg p-2 text-xs text-black mb-4 max-w-xs">
                    <div className="font-medium">NIST server hardening to pay—it's not optional</div>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <Image src="/placeholder.svg?height=30&width=30" alt="FR" width={30} height={30} />
                    <Image src="/placeholder.svg?height=30&width=30" alt="Security" width={30} height={30} />
                    <Image src="/placeholder.svg?height=30&width=30" alt="Shield" width={30} height={30} />
                    <Image src="/placeholder.svg?height=30&width=30" alt="NIST" width={30} height={30} />
                </div>
            </div>

            {/* Card 4 - Multi-cloud management */}
            <div className="bg-[#9b9ac7] rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Multi-cloud management</h3>
                <p className="text-sm mb-6">
                    Easily manage all backup & recovery policies in different accounts, regions, and clouds—in one place.
                </p>

                <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                        <div className="bg-white rounded-lg p-2 text-xs text-black mb-2 max-w-xs">
                            <div className="font-medium">Built for easy multi-tenancy</div>
                        </div>
                        <div className="bg-white rounded-lg p-2 text-xs text-black max-w-xs">
                            <div className="font-medium">Copy audit reports and API</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-2 w-36 h-24 flex items-center justify-center">
                        <div className="flex items-end space-x-1">
                            <div className="h-12 w-3 bg-[#1a1147] rounded-t"></div>
                            <div className="h-8 w-3 bg-[#1a1147] rounded-t"></div>
                            <div className="h-16 w-3 bg-[#1a1147] rounded-t"></div>
                            <div className="h-10 w-3 bg-[#1a1147] rounded-t"></div>
                            <div className="h-14 w-3 bg-[#1a1147] rounded-t"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
