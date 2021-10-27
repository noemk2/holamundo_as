import {Context} from "near-sdk-as";

//near view
export function hello_world(): string {
	return "Hello world";
}

//near call 
export function hello(): string {
	let user = Context.sender
	return "Hello " + user;

}
