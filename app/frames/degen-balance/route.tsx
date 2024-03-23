import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
    return {
        image: (
            <div tw="flex flex-col items-center justify-center">
                <div tw="flex items-center justify-center">
                    <div tw="flex items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/YJHU8e8eFBKEjHeu1z/w9xfYa2hi8kawEAZ4u8ZLTZENUduCoFOvZWjP+Ru2IEkL/small.png"
                        />
                        <h2 tw="pl-[20px]">42</h2>
                    </div>
                    <div tw="flex pl-[200px] items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/Kwt1lrnu48hVr84kcFMH3U6IRPPX0ekAfxGPEWIEzUomCanfgi/y8yYBFMCjnlrJ/small.png"
                        />
                        <h2 tw="pl-[20px]">42</h2>
                    </div>
                </div>
                <div tw="flex items-center justify-center">
                    <div tw="flex items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/Q1I4YqH38O2uOFFg0u68YOhMaaDDBiLFx7p5rNSO9L1PHi4VADVMl8OMt/uDNEUF/small.png"
                        />
                        <h2 tw="pl-[20px]">42</h2>
                    </div>
                    <div tw="flex pl-[200px] items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/4SB8Hx1kdOpRV6XWhno0M2KPp5uA9Ey77a//PsfDhBrI4AI+HXHM9FBr33iQ2eio/small.jpg"
                        />
                        <h2 tw="pl-[20px]">42</h2>
                    </div>
                </div>
                <div tw="flex items-center justify-center">
                    <div tw="flex items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/UFrxiWJtVYLmOG7Qc3XlihM66Za8OjuIJM0Izlqkg2hiBMGCI4zCI+1s1bQ2sRKk/small.png"
                        />
                        <h2 tw="pl-[20px]">42</h2>
                    </div>
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
