import Head from 'next/head';
import container from '../../public/Container (1).svg'
import container1 from '../../public/Container (2).svg'
import FR from '../../public/FR.svg'
import NLST from '../../public/NLST.svg'
import Bar from '../../public/Bar.svg'
import Image from 'next/image';

export default function Home() {


    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Head>
                <title>Backup Solution UI</title>
                <meta name="description" content="Backup Solution UI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Rapid, reliable recovery - Takes up 5 columns */}
                <div className="bg-[#8686AC] p-6 rounded-lg shadow-sm md:col-span-7">
                    <h2 className="text-xl font-semibold text-gray-900">Rapid, reliable recovery</h2>
                    <p className="text-gray-700 mb-6 text-sm w-[60%]">
                        Recover anything—from a single file to your entire production instance complete with network configurations—in seconds.
                    </p>

                    <div className="space-y-3 gap-4 flex flex-wrap">
                        <div className="bg-white rounded-lg w-[fit-content] py-2 px-4 shadow-sm">
                            <p className="text-gray-800 text-sm">
                                <span className="font-medium">Capture VPC Settings</span>
                                <br />
                                <span className="text-xs">Automatically capture changes in network configurations</span>
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="bg-white rounded-full py-2 px-4 shadow-sm">
                                <p className="text-gray-800 text-sm">DR of encrypted resources</p>
                            </div>
                            <div className="bg-white rounded-full py-2 px-4 shadow-sm">
                                <p className="text-gray-800 text-sm">Orchestrated failover/drills</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Automated cost savings - Takes up 7 columns */}
                <div className="bg-[#8686AC] p-6 rounded-lg shadow-sm md:col-span-5">
                    <h2 className="text-xl font-semibold text-gray-900">Automated cost savings</h2>
                    <p className="text-gray-700 mb-6 text-sm">
                        Reduce storage and compute costs automatically — with N2WS Resource Control, storage-optimized archiving and ZeroEBS.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="bg-white rounded-lg py-3 px-4 shadow-sm flex-[1.3]">
                            <p className="text-gray-600 text-xs">Compute savings</p>
                            <p className="text-gray-900 text-xl font-bold">$1,248<span className="text-gray-600">.75</span></p>
                        </div>
                        <div className="bg-white rounded-lg py-3 px-4 shadow-sm flex-1">
                            <p className="text-gray-600 text-xs">Storage savings</p>
                            <p className="text-gray-900 text-xl font-bold">98%</p>
                        </div>
                    </div>
                </div>

                {/* Data sovereignty and security - Takes up 5 columns */}
                <div className="bg-[#8686AC] p-6 rounded-lg shadow-sm md:col-span-5 ">
                    <h2 className="text-xl font-semibold text-gray-900">Data sovereignty and security</h2>
                    <p className="text-gray-700 mb-6 text-sm">
                        Reduce your attack surface. Get total control over your environment with N2WS, for complete peace of mind.
                    </p>

                    <div className="bg-white rounded-full py-2 px-4 shadow-sm mb-4">
                        <p className="text-gray-800 text-sm">N2WS' server belongs to you—it's not shared</p>
                    </div>

                    <div className="flex justify-between items-center px-6">
                        <Image src={FR} alt="Government Certification" />
                        <Image src={container} alt="FR Logo" />
                        <Image src={container1} alt="Security Logo" />
                        <Image src={NLST} alt="NIST Logo" />
                    </div>
                </div>

                {/* Multi-cloud management - Takes up 7 columns */}
                <div className="bg-[#8686AC] p-6 rounded-lg shadow-sm md:col-span-7 ">
                    <div className='flex gap-2'>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Multi-cloud management</h2>
                            <p className="text-gray-700 mb-4 text-sm">
                                Easily manage all backup & recovery policies in different accounts, regions, and clouds—in one console.
                            </p>

                            <div className="space-y-3 mb-4">
                                <div className="bg-white rounded-full py-2 px-4 shadow-sm">
                                    <p className="text-gray-800 text-sm">Built for easy multi-tenancy</p>
                                </div>
                                <div className="bg-white rounded-full py-2 px-4 shadow-sm">
                                    <p className="text-gray-800 text-sm">Easy audit reports and API</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src={Bar} alt="Bar Graph" className="" />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}