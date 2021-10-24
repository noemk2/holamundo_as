import {Context} from "near-sdk-as";

//near view
export function hello_word(): string {
	return "Hello word";
}

//near call 
export function hello(): string {
	let user = Context.sender
	return "Hello " + user;

}
