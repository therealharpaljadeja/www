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

    return {
        image: (
            <div tw="w-full h-full bg-black text-white flex flex-col items-start">
                <div tw="flex w-full">
                    <div tw="ml-[80px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-[#AEAEAE] w-[50px]"></div>
                    <div tw="ml-[10px] mt-[100px] border-4 border-white w-[50px]"></div>
                </div>
                <div tw=" w-full pt-[50px] h-full flex pl-[80px]">
                    <div tw="flex flex-col w-[40%]">
                        <p tw="text-[#AEAEAE] text-[30px]">
                            $DEGEN is the token you transacted the most. You
                            have made 34 transactions
                        </p>
                        <p tw="text-[#AEAEAE] text-[30px]">
                            $NORMIE is the token you transacted the most. You
                            have made 34 transactions
                        </p>
                    </div>
                    <div tw="flex flex-col border-2 w-[500px] h-[70%] mb-[40px] ml-[40px] mr-[70px] border-dashed border-white">
                        <div tw="flex items-center pl-[40px]">
                            <img
                                tw="w-[50px] h-[50px] rounded-full"
                                src="https://assets.airstack.xyz/image/logo/8453/YJHU8e8eFBKEjHeu1z/w9xfYa2hi8kawEAZ4u8ZLTZENUduCoFOvZWjP+Ru2IEkL/small.png"
                            />
                            <p tw="pl-[20px] text-[30px]">
                                {balanceUpto2Decimals(data["Degen"])}
                            </p>
                        </div>
                        <div tw="flex items-center pl-[40px]">
                            <img
                                tw="w-[50px] h-[50px] rounded-full"
                                src="https://assets.airstack.xyz/image/logo/8453/Kwt1lrnu48hVr84kcFMH3U6IRPPX0ekAfxGPEWIEzUomCanfgi/y8yYBFMCjnlrJ/small.png"
                            />
                            <h2 tw="pl-[20px] text-[30px]">
                                {balanceUpto2Decimals(data["Base God"])}
                            </h2>
                        </div>
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

