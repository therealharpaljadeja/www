import { headers } from "next/headers";

export function currentURL(pathname: string): URL {
    const headersList = headers();
    const host = headersList.get("x-forwarded-host") || headersList.get("host");
    const protocol = headersList.get("x-forwarded-proto") || "http";

    try {
        return new URL(pathname, `${protocol}://${host}`);
    } catch (error) {
        return new URL("http://localhost:3000");
    }
}

export function vercelURL() {
    return process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : undefined;
}

export function balanceUpto2Decimals(str: string) {
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
