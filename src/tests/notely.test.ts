import { expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";

test("returns null if no auth headers present", () => {
    expect(getAPIKey({
        "access-ranges": undefined,
        "authorizzation": "12345",
    })).toBe(null);
});

test("returns null if auth is not formatted with space", () => {
    expect(getAPIKey({
        "access-ranges": undefined,
        "authorization": "12345",
    })).toBe(null);
});

test("returns string if auth is properly in place, and first element of splitAuth is not ApiKey", () => {
    expect(getAPIKey({
        "access-ranges": undefined,
        "authorization": "ApiKey 12345",
    })).toBe("12345");
});
