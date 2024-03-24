/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
    let persona: any = ctx.searchParams["persona"];

    switch (persona) {
        case "Futourist":
            return {
                image: "https://i.ibb.co/TqHR3PL/futourist.jpg",
                buttons: [
                    <Button action="post" target={{ pathname: "/" }}>
                        ← Previous
                    </Button>,
                    <Button
                        action="post"
                        target={{
                            pathname: "/persona-mint",
                            query: { persona },
                        }}
                    >
                        Mint Futourist NFT →
                    </Button>,
                ],
            };
        case "Memelancholic":
            return {
                image: "https://i.ibb.co/4M1L6jZ/memelancholic.jpg",
                buttons: [
                    <Button action="post" target={{ pathname: "/" }}>
                        ← Previous
                    </Button>,
                    <Button
                        action="post"
                        target={{
                            pathname: "/persona-mint",
                            query: { persona },
                        }}
                    >
                        Mint Memelancholic NFT →
                    </Button>,
                ],
            };
        case "Gigaheart":
            return {
                image: "https://i.ibb.co/M8Bd3RS/gigaheart.jpg",
                buttons: [
                    <Button action="post" target={{ pathname: "/" }}>
                        ← Previous
                    </Button>,
                    <Button
                        action="post"
                        target={{
                            pathname: "/persona-mint",
                            query: { persona },
                        }}
                    >
                        Mint Gigaheart NFT →
                    </Button>,
                ],
            };
        case "Vibe Seeker":
            return {
                image: "https://i.ibb.co/nfB9pjM/vibe-seeker.jpg",
                buttons: [
                    <Button action="post" target={{ pathname: "/" }}>
                        ← Previous
                    </Button>,
                    <Button
                        action="post"
                        target={{
                            pathname: "/persona-mint",
                            query: { persona },
                        }}
                    >
                        Mint Vibe Seeker NFT →
                    </Button>,
                ],
            };
        default:
            return {
                image: "How did you reach here?",
            };
    }
});

export const GET = handleRequest;
export const POST = handleRequest;
