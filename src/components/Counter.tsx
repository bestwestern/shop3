import { h, Fragment } from 'preact';
import './Counter.css';

export default function Counter({ children, count }) {
	const add = () => count.value++;
	const subtract = () => count.value--;
const click=()=>{
	console.log("JKl");
	fetch('https://api.vercel.com/v1/integrations/deploy/prj_jyfEU9eqOd0BClwPV61JEUt7w9O3/D7JpmwV2Ee',
	 { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
	 body: JSON. stringify({ name: 'John', email: 'john@example.com' }) }).then(response => console.log(response));
}
console.log("howkjdffsl")
	return (
		<>
			<div class="counter">
				<button onClick={click}>klik</button>
			</div>
		</>
	);
}
