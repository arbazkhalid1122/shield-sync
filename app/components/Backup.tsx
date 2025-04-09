import Image from 'next/image';
import progress from '../../public/div.svg'
import { FaCircleCheck } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";
import { RiLineChartFill } from "react-icons/ri";

const Backup = () => {
    return (
        <section className="px-4 py-10 bg-white md:py-12">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-[#0E1E4B] text-3xl md:text-4xl text-center mb-16">
                    Why ShieldSync?
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-12">
                        {/* Feature 1 */}
                        <div className="flex">
                            <div className="mr-4 mt-1">
                                <FaCircleCheck size={24} className="text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl text-[#0F0E47]">100% Automated Cloud Storage Backup</h3>
                                <p className="text-[#4B5563] mt-2 text-sm">No manual intervention required</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex">
                            <div className="mr-4 mt-1">
                                <FaShield className="h-6 w-6 text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl text-[#0F0E47]">Ransomware Protection</h3>
                                <p className="text-[#4B5563] mt-2 text-sm">Backups remain untouchable with immutable storage</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex">
                            <div className="mr-4 mt-1">
                                <RiLineChartFill className="h-6 w-6 text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl text-[#0F0E47]">Affordable & Scalable</h3>
                                <p className="text-[#4B5563] mt-2 text-sm">Pay-as-you-grow model tailored for SMBs</p>
                            </div>
                        </div>
                    </div>

                    {/* Backup Status Card */}
                    <div className="flex items-center justify-center rounded-lg h-[fit-content] w-[fit-content] p-8 bg-[#F4F6FA]">
                        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                            <div className="flex text-base text-[#0F0E47] justify-between mb-4">
                                <span>Backup Status</span>
                                <span className='text-[#4B5563]'>Last backup: 2 min ago</span>
                            </div>
                            <Image src={progress} alt="Progress" className="w-full h-auto mb-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Backup;