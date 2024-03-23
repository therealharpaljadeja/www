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
                    <div tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                </div>
                <div tw=" w-full pt-[50px] h-full flex pl-[80px]">
                    <img
                        tw="w-[300px] h-[300px]"
                        src="https://wrpcd.net/cdn-cgi/image/fit=contain,f=auto,w=168/https%3A%2F%2Fi.imgur.com%2FRYLwxg1.jpg"
                    />
                    <p tw="text-[#AEAEAE] mr-[120px] ml-[40px]">
                        This past year, probably many transactions took place to and fro. 
                        Let's find out!
                    </p>
                </div>
            </div>
        ),
        buttons: [
            <Button action="post" target={{ pathname: "/degen-tips" }}>
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
