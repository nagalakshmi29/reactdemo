import axios from 'axios'

function Contact (){
	function create(){
		axios.post("https://reqres.in/api/users",
		{
			username:"subha@gmail.com",
			password:"subha@1234"
		})
		.then((res)=>{
			console.log(res.data)
		})
	}
	return(
		<div>
		<h1>Contact component</h1>
		<button onClick={create}>send</button>
		</div>
		)
}
export default Contact