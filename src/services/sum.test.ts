import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
	const result = sum(1, 2);

	expect(result).toEqual(3);
});

test("adds 1 + 3 to equal 4", () => {
	const result = sum(1, 3);

	expect(result).toEqual(4);
});
