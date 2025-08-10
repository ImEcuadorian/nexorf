import NexorfLogo from "@/shared/ui/molecules/NexorfLogo";
import Link from "next/link";

const HeaderLogoLink = () => {

    return (
        <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="flex items-center space-x-2">
                <div>
                    <NexorfLogo size="small" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"/>
                </div>
                <span
                    className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
              nexorf
            </span>
            </div>
        </Link>
    )
};

export default HeaderLogoLink;