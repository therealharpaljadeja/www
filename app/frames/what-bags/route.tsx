/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

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
                </div>
                <div tw=" w-full h-full flex flex-col pl-[80px]">
                    <p tw="mt-[150px] mr-[120px] text-[#AEAEAE]">
                        You aped into the meme coin meta wif some sweet
                        positions. Learn what meme coins you held this year?
                    </p>
                </div>
            </div>
        ),
        buttons: [
            <Button action="post" target={{ pathname: "/last-used" }}>
                ← Previous
            </Button>,
            <Button
                action="post"
                target={{
                    pathname: "/degen-balance",
                }}
            >
                Find Out!
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
