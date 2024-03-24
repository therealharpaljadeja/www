/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { FrameReducer } from "frames.js/next/types";

type Persona =
    | "Futourist"
    | "Memelancholic"
    | "Gigaheart"
    | "Vibe Seeker"
    | undefined;

const reducer: FrameReducer<{ persona: string }> = (state, action) => ({
    persona: "",
});

const handleRequest = frames(async (ctx) => {
    let persona: Persona;
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
                        }}
                    >
                        Mint Vibe Seeker NFT →
                    </Button>,
                ],
            };
    }

    return {
        image: "asda",
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
                Next →
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
