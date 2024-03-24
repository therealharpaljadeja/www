/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import FindLastUsedToken from "@/airstack/find-not-recent-used-token";
import { balanceUpto2Decimals } from "@/utils";

const handleRequest = frames(async (ctx) => {
    let data;

    if (ctx.message) {
        let fid = ctx.message.requesterFid;
        data = await FindLastUsedToken(`fc_fid:${fid}`);
    }
    if (data)
        return {
            image: (
                <div tw="w-full h-full bg-black text-white flex flex-col items-start">
                    <div tw="flex w-full">
                        <div tw="ml-[80px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    </div>
                    <div tw=" w-full pt-[50px] h-full flex pl-[80px]">
                        {data.logo && (
                            <img
                                tw="w-[300px] h-[300px] rounded-full"
                                src={data.logo}
                            />
                        )}
                        <p tw="text-[#AEAEAE] mr-[120px] ml-[40px]">
                            Its been{" "}
                            {balanceUpto2Decimals(
                                data.timeSinceLastUsed.toString()
                            )}{" "}
                            hours you have interacted with ${data.name}!
                        </p>
                    </div>
                </div>
            ),
            buttons: [
                <Button action="post" target={{ pathname: "/last-used-pre" }}>
                    ← Previous
                </Button>,
                <Button
                    action="post"
                    target={{
                        pathname: "/what-bags",
                    }}
                >
                    Next →
                </Button>,
            ],
        };
    else
        return {
            image: (
                <div tw="w-full h-full bg-black text-white flex flex-col items-start">
                    <div tw="flex w-full">
                        <div tw="ml-[80px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                        <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    </div>
                    <div tw=" w-full pt-[50px] h-full flex pl-[80px]">
                        <p tw="text-[#AEAEAE] mr-[120px] ml-[40px]">
                            Couldn't find much information
                        </p>
                    </div>
                </div>
            ),
            buttons: [
                <Button action="post" target={{ pathname: "/last-used-pre" }}>
                    ← Previous
                </Button>,
                <Button
                    action="post"
                    target={{
                        pathname: "/what-bags",
                    }}
                >
                    Next →
                </Button>,
            ],
        };
});

export const GET = handleRequest;
export const POST = handleRequest;
