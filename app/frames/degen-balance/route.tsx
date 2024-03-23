import { Button } from "frames.js/next";
import { frames } from "../frames";
import findDegenTokenBalances from "@/airstack/find-degen-tokens-balance";

function balanceUpto2Decimals(str: string) {
    // Regular expression to match numbers with potentially more than two decimal places
    const regex = /^(\d+(?:\.\d{0,2})?)\d*$/;

    // Check if the string matches the regular expression
    if (regex.test(str)) {
        // Extract the matched part with up to two decimal places
        const truncatedString = str.replace(regex, "$1");
        return truncatedString;
    } else {
        // Handle invalid input
        return "Invalid number";
    }
}

const handleRequest = frames(async (ctx) => {
    let data = await findDegenTokenBalances(
        "0x22b2DD2CFEF2018D15543c484aceF6D9B5435863"
    );

    console.log(balanceUpto2Decimals(data["Base God"]));

    return {
        image: (
            <div tw="flex flex-col items-center justify-center">
                <div tw="flex items-center justify-center">
                    <h2>Your Balances</h2>
                </div>
                <div tw="flex items-center justify-center">
                    <div tw="flex items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/YJHU8e8eFBKEjHeu1z/w9xfYa2hi8kawEAZ4u8ZLTZENUduCoFOvZWjP+Ru2IEkL/small.png"
                        />
                        <h2 tw="pl-[20px]">
                            {balanceUpto2Decimals(data["Degen"])}
                        </h2>
                    </div>
                    <div tw="flex pl-[200px] items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/Kwt1lrnu48hVr84kcFMH3U6IRPPX0ekAfxGPEWIEzUomCanfgi/y8yYBFMCjnlrJ/small.png"
                        />
                        <h2 tw="pl-[20px]">
                            {balanceUpto2Decimals(data["Base God"])}
                        </h2>
                    </div>
                </div>
                <div tw="flex items-center justify-center">
                    <div tw="flex items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/Q1I4YqH38O2uOFFg0u68YOhMaaDDBiLFx7p5rNSO9L1PHi4VADVMl8OMt/uDNEUF/small.png"
                        />
                        <h2 tw="pl-[20px]">
                            {balanceUpto2Decimals(data["Normie"])}
                        </h2>
                    </div>
                    <div tw="flex pl-[200px] items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/4SB8Hx1kdOpRV6XWhno0M2KPp5uA9Ey77a//PsfDhBrI4AI+HXHM9FBr33iQ2eio/small.jpg"
                        />
                        <h2 tw="pl-[20px]">
                            {balanceUpto2Decimals(data["Toshi"])}
                        </h2>
                    </div>
                </div>
                <div tw="flex items-center justify-center">
                    <div tw="flex items-center space-x-2">
                        <img
                            tw="w-[80px] h-[80px] rounded-full"
                            src="https://assets.airstack.xyz/image/logo/8453/UFrxiWJtVYLmOG7Qc3XlihM66Za8OjuIJM0Izlqkg2hiBMGCI4zCI+1s1bQ2sRKk/small.png"
                        />
                        <h2 tw="pl-[20px]">
                            {balanceUpto2Decimals(data["doginme"])}
                        </h2>
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
