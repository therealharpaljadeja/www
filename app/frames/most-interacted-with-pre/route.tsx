/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
    return {
        image: (
            <div tw="w-full h-full bg-black text-white flex flex-col items-start">
                <div tw="flex w-full">
                    <div tw="ml-[80px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                </div>
                <div tw=" w-full h-full flex flex-col pl-[80px]">
                    <p tw="mt-[150px] mr-[120px] text-[#AEAEAE]">
                        This past year, you interacted with a lot of tokens.
                        Find out which token you interacted with the most!
                    </p>
                </div>
            </div>
        ),
        buttons: [
            <Button action="post" target={{ pathname: "/" }}>
                ← Previous
            </Button>,
            <Button
                action="post"
                target={{
                    pathname: "/most-interacted-with",
                }}
            >
                Find Out!
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
