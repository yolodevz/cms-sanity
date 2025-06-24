import "server-only";

export const token = process.env.SANITY_API_READ_WRITE_TOKEN;

if (!token) {
    throw new Error("Missing SANITY_API_READ_WRITE_TOKEN");
}