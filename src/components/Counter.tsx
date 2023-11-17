import { h, Fragment } from 'preact';
import { createClient } from "@supabase/supabase-js";
import './Counter.css';
const supabaseUrl = "https://upabdmzybbgsnbonhgmc.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwYWJkbXp5YmJnc25ib25oZ21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMjg1NTMsImV4cCI6MTk5NjcwNDU1M30.5TeDInNIPfxKeE_KG4GcUEznh4i9wbKjUek935JSq6Y";


const supabase = createClient(
"https://upabdmzybbgsnbonhgmc.supabase.co",
supabaseKey
);
export default function Counter({ children, count }) {
	const add = () => count.value++;
	const subtract = () => count.value--;
	const submit=async e=>{
		e.preventDefault();
		const titleInput=document.getElementById("title");
		const title=titleInput.value.trim();	
		const priceInput=document.getElementById("price");
		const price=Number(priceInput.value.trim())
		const descriptionInput=document.getElementById("description");
		const description=descriptionInput.value.trim()
		if (title.length&&description.length&&!isNaN(price)){
			const id=title.toLowerCase().replaceAll(" ","_");
const { data, error } = await supabase
.from('products')
.insert([
  { id,title, description,price },
])
.select()
if (!error)
fetch('https://api.vercel.com/v1/integrations/deploy/prj_jyfEU9eqOd0BClwPV61JEUt7w9O3/D7JpmwV2Ee',
	 { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
	 body: JSON. stringify({ name: 'John', email: 'john@example.com' }) }).then(response => alert("Produkt tilføjet. URL konstrueres - vent et minut"));
		
titleInput.value=""
descriptionInput.value=""
priceInput.value="";
		}
		else{
			alert ("Mangler data")
		}
		//click()

	}
const click=()=>{
	console.log("JKl");
	fetch('https://api.vercel.com/v1/integrations/deploy/prj_jyfEU9eqOd0BClwPV61JEUt7w9O3/D7JpmwV2Ee',
	 { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
	 body: JSON. stringify({ name: 'John', email: 'john@example.com' }) }).then(response => console.log(response));
}
	return (
		<>
<h1>Opret nyt product</h1>
<form onSubmit={submit}>
<strong>Navn</strong>
<br/>
<input type="text" id="title"  />
<br/>
<strong >Beskrivelse</strong>
<br/>
			<textarea rows={5} id="description"  />
<br/>
<strong>Pris</strong>
<br/>
<input type="number" id="price" />
	
			<button type="submit">Tilføj</button>
</form>
		</>
	);
}
