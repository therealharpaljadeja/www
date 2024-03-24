import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Warpcast and Wallet Wrapped",
        description: "This is Warpcast and Wallet Wrapped",
        other: {
            ...(await fetchMetadata(
                new URL("/frames", "http://localhost:3000")
            )),
        },
    };
}

export default async function Home() {
    return <div>Warpcast and Wallet Wrapped</div>;
}
