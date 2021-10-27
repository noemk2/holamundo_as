import {hello, hello_world} from "..";
import {Context} from "near-sdk-as";
import * as contract from '..';


describe("helloworld", () => {
	it("should return 'Hello world'", () => {
		expect(hello_world()).toStrictEqual("Hello world");
	})
});

describe("hello user", () => {
	it("should return 'Hello + user name'", () => {
		let user = Context.sender
		expect(hello()).toStrictEqual("Hello " + user);
	})
});
