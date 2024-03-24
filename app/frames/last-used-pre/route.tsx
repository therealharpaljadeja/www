/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import FindLastUsedToken from "@/airstack/find-not-recent-used-token";

const handleRequest = frames(async (ctx) => {
    return {
        image: (
            <div tw="w-full h-full bg-black text-white flex flex-col items-start">
                <div tw="flex w-full">
                    <div tw="ml-[80px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                </div>
                <div tw=" w-full pt-[50px] h-full flex pl-[80px]">
                    <p tw="mr-[120px]">
                        Some tokens have been sitting in your wallet for a while
                        now. Find out which ones...
                    </p>
                </div>
            </div>
        ),
        buttons: [
            <Button
                action="post"
                target={{ pathname: "/most-interacted-with" }}
            >
                ← Previous
            </Button>,
            <Button
                action="post"
                target={{
                    pathname: "/last-used",
                }}
            >
                Find Out!
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
