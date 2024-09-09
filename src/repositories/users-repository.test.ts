import { beforeEach, describe, expect, it } from "vitest";
import { UsersRepository } from "./users-repository";

describe("Users Repository", () => {
	let usersRepository: UsersRepository;

	beforeEach(() => {
		usersRepository = new UsersRepository([
			{
				id: 1,
				name: "Agustinho",
				age: 28,
				email: "agustinho@email.com",
			},
			{
				id: 2,
				name: "Rodolfo",
				age: 32,
				email: "rodolfo@email.com",
			},
		]);
	});

	it("should be able to create a new user", () => {
		const createdUser = usersRepository.create({
			age: 25,
			email: "gustavo@email.com",
			name: "Gustavo",
		});

		expect(createdUser).toHaveProperty("id");
	});

	it("should be able to return all users", () => {
		const users = usersRepository.index();

		expect(users).toHaveLength(2);
	});

	it("should be able to return one user by id", () => {
		const user = usersRepository.findById(1);

		expect(user?.name).toEqual("Agustinho");
	});

	it("should not be able to create a new user with existent email", () => {
		expect(() =>
			usersRepository.create({
				name: "Agustinho",
				age: 28,
				email: "agustinho@email.com",
			}),
		).toThrowError();
	});

	it("should not be able to find an unexistent user", () => {
		expect(() => usersRepository.findById(3)).toThrowError();
	});
});
