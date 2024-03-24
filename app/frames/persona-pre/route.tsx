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
                </div>
                <div tw=" w-full h-full flex flex-col pl-[80px]">
                    <p tw="mt-[150px] mr-[120px] text-[#AEAEAE]">
                        What a journey you have had! You came for the tokens but
                        stayed for the vibes WAGMI. Click next to find out your
                        own-chain personality.
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
                    pathname: "/persona",
                }}
            >
                Find Out Persona →
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
