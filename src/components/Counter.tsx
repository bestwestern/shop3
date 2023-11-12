import { h, Fragment } from 'preact';
import './Counter.css';

export default function Counter({ children, count }) {
	const add = () => count.value++;
	const subtract = () => count.value--;
	const submit=e=>{
		console.log(e)
		e.preventDefault();
		click()

	}
const click=()=>{
	console.log("JKl");
	fetch('https://api.vercel.com/v1/integrations/deploy/prj_jyfEU9eqOd0BClwPV61JEUt7w9O3/D7JpmwV2Ee',
	 { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
	 body: JSON. stringify({ name: 'John', email: 'john@example.com' }) }).then(response => console.log(response));
}
console.log("howkjdffsl")
	return (
		<>
<h1>Opret nyt product</h1>
<form onSubmit={submit}>

			<input type="text" placeholder={"Titel"} />
</form>
		</>
	);
}
