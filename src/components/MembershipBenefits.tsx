import { IconBolt, IconMoneybag } from "@tabler/icons-react";
import { CheckCheck, ExpandIcon, HandPlatterIcon, StoreIcon } from "lucide-react";

export default function MembershipBenefits() {
return (
    <div className="w-full h-full my-10 px-4 md:px-10 xl:w-3/4">
        <h2 className="mt-10 text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent mb-4">Membership Benefits</h2>
        <p className="text-center font-extralight mb-20 md:text-lg">Perks so good you&apos;ll never need to go anywhere else for your design. Seriously.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="border border-gray-200 bg-zinc-100 dark:border-gray-700 dark:bg-neutral-800 py-8 px-4">
                <h2 className="text-2xl font-semibold text-primary text-center pb-4">Fixed Monthly Rate</h2>
                <IconMoneybag size={48} stroke={2} className="mx-auto text-primary" />
                <p className="text-center text-black dark:text-white font-extralight pt-5">No surprises here! Pay the same fixed price each month.</p>
            </div>
            <div className="border border-gray-200 bg-zinc-100 dark:border-gray-700 dark:bg-neutral-800 py-8 px-4">
                <h2 className="text-2xl font-semibold text-primary text-center pb-4">Lightning Fast Delivery</h2>
                <IconBolt size={48} stroke={2} className="mx-auto text-primary" />
                <p className="text-center font-extralight pt-5">We understand that business moves fast, we aim to provide a quality product in just a few days on average.</p>
            </div>
            <div className="border border-gray-200 bg-zinc-100 dark:border-gray-700 dark:bg-neutral-800 py-8 px-4">
                <h2 className="text-2xl font-semibold text-primary text-center pb-4">Top-notch Quality</h2>
                <CheckCheck size={48} className="mx-auto text-primary" />
                <p className="text-center font-extralight pt-5">Performant site that look better than your competitions sites.</p>
            </div>
            <div className="border border-gray-200 bg-zinc-100 dark:border-gray-700 dark:bg-neutral-800 py-8 px-4">
                <h2 className="text-2xl font-semibold text-primary text-center pb-4">Unique & All Yours</h2>
                <StoreIcon size={48} className="mx-auto text-primary" />
                <p className="text-center font-extralight pt-5">Each of your designs is made especially for you and is 100% yours. No templates.</p>
            </div>
            <div className="border border-gray-200 bg-zinc-100 dark:border-gray-700 dark:bg-neutral-800 py-5 px-4">
                <h2 className="text-2xl font-semibold text-primary text-center pb-4">Renowed Customer Service</h2>
                <HandPlatterIcon size={48} strokeWidth={2} className="mx-auto text-primary"/>
                <p className="text-center font-extralight pt-5">We take pride in providing an above and beyond experience for our #SunnySiders!</p>
            </div>
            <div className="border border-gray-200 bg-zinc-100 dark:border-gray-700 dark:bg-neutral-800 py-8 px-4">
                <h2 className="text-2xl font-semibold text-primary text-center pb-4">Flexible and Scalable</h2>
                <ExpandIcon size={48} className="mx-auto text-primary" />
                <p className="text-center font-extralight pt-5">Scale up or down as needed, and pause or cancel at anytime.</p>
            </div>
        </div>
  </div>
);
}
