import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { vercelURL } from "@/utils";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Warpcast and Wallet Wrapped",
        description: vercelURL(),
        other: {
            ...(await fetchMetadata(
                new URL("/frames", vercelURL() || "http://localhost:3000")
            )),
        },
    };
}

export default async function Home() {
    return <div>Warpcast and Wallet Wrapped</div>;
}
