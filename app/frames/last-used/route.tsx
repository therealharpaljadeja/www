/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import FindLastUsedToken from "@/airstack/find-not-recent-used-token";

const handleRequest = frames(async (ctx) => {
    let data = await FindLastUsedToken(
        "0x22b2DD2CFEF2018D15543c484aceF6D9B5435863"
    );

    return {
        image: (
            <div tw="w-full h-full bg-black text-white flex flex-col items-start">
                <div tw="flex w-full">
                    <div tw="ml-[80px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                </div>
                <div tw=" w-full pt-[50px] h-full flex pl-[80px]">
                    <img
                        tw="w-[300px] h-[300px]"
                        src="https://avatars.githubusercontent.com/u/26248903?v=4"
                    />
                    <p tw="text-[#AEAEAE] mr-[120px] ml-[40px]">
                        Its been  {data.timeSinceLastUsed} hours you have interacted with ${data.name}!
                    </p>
                </div>
            </div>
        ),
        buttons: [
            <Button action="post" target={{ pathname: "/degen-tippper" }}>
                ← Previous
            </Button>,
            <Button
                action="post"
                target={{
                    pathname: "/what-bags",
                }}
            >
                Find Bags
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
