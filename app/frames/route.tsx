/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
    return {
        image: (
            <div tw="w-full h-full bg-black text-white flex flex-col items-start justify-center">
                <div tw="flex">
                    <div tw="ml-[80px] mt-[100px] border-4 border-white w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                </div>
                <div tw="flex flex-col w-[95%] pl-[80px] h-[90%]">
                    <h2>www</h2>
                    <p tw="text-[#AEAEAE]">
                        Warpcast Wallet Wrapped is your yearly recap of on-chain
                        actions. Find out if you are X, Y, Z or A.
                    </p>
                </div>
            </div>
        ),
        buttons: [
            <Button
                action="post"
                target={{
                    pathname: "/degen-balance",
                }}
            >
                Wrap Me!
            </Button>,
            // <Button
            //     action="post"
            //     target={{
            //         pathname: "/next",
            //     }}
            // >
            //     Next frame
            // </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
