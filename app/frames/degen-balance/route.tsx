import { Button } from "frames.js/next";
import { frames } from "../frames";
import findDegenTokenBalances from "@/airstack/find-degen-tokens-balance";
import { balanceUpto2Decimals } from "@/utils";

const handleRequest = frames(async (ctx) => {
    let data;

    if (ctx.message) {
        let fid = ctx.message.requesterFid;
        data = await findDegenTokenBalances(`fc_fid:${fid}`);
    }
    if (data)
        return {
            image: (
                <div tw="w-full h-full bg-black text-white flex flex-col items-start">
                    <div tw="flex w-full">
                        <div
                            key={1}
                            tw="ml-[80px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"
                        ></div>
                        <div
                            key={2}
                            tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"
                        ></div>
                        <div
                            key={3}
                            tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"
                        ></div>
                        <div
                            key={4}
                            tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"
                        ></div>
                        <div
                            key={5}
                            tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"
                        ></div>
                    </div>
                    <div tw=" w-full h-full flex flex-col pl-[80px]">
                        <h2 tw="text-[40px]">Meme coin balance:</h2>
                        <div tw="flex flex-col h-[70%] mb-[40px] mr-[70px]">
                            <div tw="flex justify-center">
                                <div tw="flex items-center">
                                    <img
                                        tw="w-[80px] h-[80px] rounded-full"
                                        src="https://assets.airstack.xyz/image/logo/8453/YJHU8e8eFBKEjHeu1z/w9xfYa2hi8kawEAZ4u8ZLTZENUduCoFOvZWjP+Ru2IEkL/small.png"
                                    />
                                    <p tw="pl-[20px] text-[30px]">
                                        {balanceUpto2Decimals(data["Degen"])}
                                    </p>
                                </div>
                                <div tw="flex items-center ml-[80px]">
                                    <img
                                        tw="w-[80px] h-[80px] rounded-full"
                                        src="https://assets.airstack.xyz/image/logo/8453/Kwt1lrnu48hVr84kcFMH3U6IRPPX0ekAfxGPEWIEzUomCanfgi/y8yYBFMCjnlrJ/small.png"
                                    />
                                    <h2 tw="pl-[20px] text-[30px]">
                                        {balanceUpto2Decimals(data["Base God"])}
                                    </h2>
                                </div>
                                <div tw="flex items-center ml-[80px]">
                                    <img
                                        tw="w-[80px] h-[80px] rounded-full"
                                        src="https://assets.airstack.xyz/image/logo/8453/Q1I4YqH38O2uOFFg0u68YOhMaaDDBiLFx7p5rNSO9L1PHi4VADVMl8OMt/uDNEUF/small.png"
                                    />
                                    <p tw="pl-[20px] text-[30px]">
                                        {balanceUpto2Decimals(data["Normie"])}
                                    </p>
                                </div>
                            </div>
                            <div tw="flex items-center justify-center">
                                <div tw="flex items-center pl-[40px]">
                                    <img
                                        tw="w-[80px] h-[80px] rounded-full"
                                        src="https://assets.airstack.xyz/image/logo/8453/4SB8Hx1kdOpRV6XWhno0M2KPp5uA9Ey77a//PsfDhBrI4AI+HXHM9FBr33iQ2eio/small.jpg"
                                    />
                                    <h2 tw="pl-[20px] text-[30px]">
                                        {balanceUpto2Decimals(data["Toshi"])}
                                    </h2>
                                </div>
                                <div tw="flex items-center ml-[80px] justify-center">
                                    <img
                                        tw="w-[80px] h-[80px] rounded-full"
                                        src="https://assets.airstack.xyz/image/logo/8453/UFrxiWJtVYLmOG7Qc3XlihM66Za8OjuIJM0Izlqkg2hiBMGCI4zCI+1s1bQ2sRKk/small.png"
                                    />
                                    <h2 tw="pl-[20px] text-[30px]">
                                        {balanceUpto2Decimals(data["doginme"])}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            buttons: [
                <Button action="post" target={{ pathname: "/what-bags" }}>
                    Previous frame
                </Button>,
                <Button
                    action="post"
                    target={{
                        pathname: "/persona-pre",
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
                        <div tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"></div>
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
                <Button action="post" target={{ pathname: "/" }}>
                    Previous frame
                </Button>,
            ],
        };
});

export const POST = handleRequest;
