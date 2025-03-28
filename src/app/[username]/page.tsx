import Link from "next/link";
import Image from "../components/Image/Image";
import { Feed } from "../components/feed/feed";

const UserPage = () => {
    return (
        <div>
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
                <Link href="/">
                    <Image path="icons/back.svg" alt="back" w={24} h={24} />
                </Link>
                <h1 className="font-bold text-lg">Richi Dev</h1>
            </div>
            <div className="">
                <div className="relative w-full">
                    <div className="w-full aspect-[3/1] relative">
                        <Image path="general/cover.jpg" alt="cover" w={600} h={200} tr={true} />
                    </div>
                    <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
                        <Image path="general/avatar.png" alt="cover" w={100} h={100} tr={true} />
                    </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2 p-2">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/more.svg" alt="edit" w={20} h={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/explore.svg" alt="edit" w={20} h={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/message.svg" alt="edit" w={20} h={20} />
                    </div>
                    <button className="py-2 px-4 bg-white text-black rounded-full font-bold">Follow</button>
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <div className="">
                        <h1 className="text-2xl font-bold">Richi Dev</h1>
                        <span className="text-textGray text-sm">@richi_oct</span>
                    </div>
                    <p>Richi Dev Channel</p>
                    <div className="flex gap-4 text-textGray text-[15px]">
                        <div className="flex items-center gap-2">
                            <Image path="icons/userLocation.svg" alt="location" w={20} h={20} />
                            <span>Belarus</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image path="icons/date.svg" alt="date" w={20} h={20} />
                            <span>Joined April 2023</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold">100</span>
                            <span className="text-textGray text-[15px]">Followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">150</span>
                            <span className="text-textGray text-[15px]">Followings</span>
                        </div>
                    </div>
                </div>
            </div>
            <Feed />
        </div>
    );
};

export default UserPage