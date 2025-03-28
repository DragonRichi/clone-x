
import { imagekit } from "@/app/lib/utils";
import Image from "../Image/Image";
import { PostInfo } from "./post-info";
import { PostInteractions } from "./post-interactions";
import { Video } from "../video/video";
import Link from "next/link";


interface FileDetailesResponse {
    width: number
    height: number
    filePath: string
    url: string
    fileType: string
    customMetadata?: { sensetive: boolean }
}

export const Post = async ({ type }: { type?: "status" | "comment" }) => {
    const getFileDetails = async (fileId: string): Promise<FileDetailesResponse> => {
        return new Promise((resolve, reject) => {
            imagekit.getFileDetails(fileId, function (error, result) {
                if (error) reject(error);
                else resolve(result as FileDetailesResponse);
            });
        })
    };

    const fileDetails = await getFileDetails("67b42cef432c476416669f16");

    return (
        <div className="p-4 border-y-[1px] border-borderGray">
            <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#71767b"
                        d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                    />
                </svg>
                <span>Lama Dev reposted</span>
            </div>
            {/* <div className="flex gap-4"> */}
            <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
                <div className={`${type === "status" && "hidden"} relative w-10 h-10 rounded-full overflow-hidden`}>
                    <Image path="general/avatar.png" w={100} h={100} alt="avatar" tr={true} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <div className="w-full flex justify-between">
                        <Link href={`/richiDev`} className="flex gap-4">
                            <div className={`${type !== "status" && "hidden"} relative w-10 h-10 rounded-full overflow-hidden`}>
                                <Image path="general/avatar.png" w={100} h={100} alt="avatar" tr={true} />
                            </div>
                            <div className={`flex items-center gap-2 flex-wrap ${type === "status" && "flex-col gap-0 !items-start"}`}>
                                <h1 className="text-md font-bold">Richi Dev</h1>
                                <span className={`text-textGray ${type === "status" && "text-sm"}`}>@richidev</span>
                                {type !== "status" && <span className="text-textGray">1 day ago</span>}
                            </div>
                        </Link>
                        <PostInfo />
                    </div>
                    <Link href={`/richiDev/status/1`}>
                        <p className={`${type === "status" && "text-lg"}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium officia corporis, maxime repellat eligendi illo cum est ipsum minima tempora assumenda aspernatur laborum autem nihil beatae. Iure totam dolor fugit.
                        </p>
                    </Link>
                    {/* <Image path="general/post.jpeg" w={600} h={600} alt="testpost" /> */}
                    {fileDetails && fileDetails.fileType === "image" ? < Image
                        path={fileDetails.filePath}
                        alt="testpost"
                        w={fileDetails.width}
                        h={fileDetails.height}
                        className={fileDetails.customMetadata?.sensetive ? "blur-lg" : ""}
                    /> : <Video
                        path={fileDetails.filePath}
                        className={fileDetails.customMetadata?.sensetive ? "blur-lg" : ""}
                    />}
                    {type === "status" && <span className="text-textGray">8:41 PM * Dec 5, 2024</span>}
                    <PostInteractions />
                </div>
            </div>
        </div>
    );
}