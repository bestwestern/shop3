import { h, Fragment } from 'preact';
import './Counter.css';

export default function Counter({ children, count }) {
	const add = () => count.value++;
	const subtract = () => count.value--;
const click=()=>{
	console.log("JKl")
}
	return (
		<>
			<div class="counter">
				<button onClick={click}>klik</button>
			</div>
			<div class="counter-message">{children}</div>
		</>
	);
}
