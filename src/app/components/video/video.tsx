"use client"

import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type PropsVideo = {
    path: string
    className?: string
}

export const Video = ({ path, className }: PropsVideo) => {
    return <IKVideo
        urlEndpoint={urlEndpoint}
        path={path}
        className={className}
        transformation={[
            { width: "1920", height: "1080", q: "90" },
            { raw: "l-text,i-RichiDev,fs-100,co-white,lfo-right,l-end" }
        ]}
        controls
    />;
};