import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const nayoks = ['Salman Khan', 'Sakib Khan', 'ShahRukh Khan'];
	const products = [
		{ name: 'Photoshop', price: '$79.99' },
		{ name: 'Illustrator', price: '$69.99' },
		{ name: 'Premiere Pro', price: '$89.99' },
	];
	// const productNames = products.map((product) => product);
	// console.log(productNames);

	// const nayokNames = nayoks.map((nayok) => nayok);
	// console.log(nayokNames);
	return (
		<div className='App'>
			<header className='App-header'>
				<Users></Users>
				<Counter></Counter>
				<ul>
					{nayoks.map((nayok) => (
						<li>{nayok}</li>
					))}

					{products.map((product) => (
						<li>{product.name}</li>
					))}
				</ul>

				{/* {products.map((pd) => (
					<Product product={pd}></Product>
					
				))} */}
				<Product
					name={products[0].name}
					price={products[0].price}></Product>
				<Product
					name={products[1].name}
					price={products[1].price}></Product>
				<Product
					name={products[2].name}
					price={products[2].price}></Product>
				<Person name='Tina Khan' age='20'></Person>
				<Person name='Raja Khan' age='22'></Person>
				<Person name='Sakib Khan' age='24'></Person>
				<Person name='Mina Khan' age='22'></Person>
			</header>
		</div>
	);
}
function Users() {
	const [users, setusers] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => setusers(data));
	}, []);

	return (
		<div>
			<h3>Dynamic User: {users.length} </h3>
			<ul>
				{users.map((user) => (
					<li>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
function Counter() {
	const [count, setcount] = useState(0);
	const handleIncrease = () => setcount(count + 1);
	//  {
	// 	const newCount = count + 1;
	// 	setcount(newCount);
	// };
	const handleDecrease = () => {
		if (count !== 0) {
			setcount(count - 1);
		} else if (count === 0) {
			alert('Negative Value is not Possible');
		}
	};
	// {
	// 	const newCount = count - 1;
	// 	setcount(newCount);
	// };

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrease}>Increase</button>
			<button onClick={handleDecrease}>Decrease</button>
		</div>
	);
}
function Product(props) {
	// deStructuring
	// const { name, price } = props;
	// console.log(name, price);
	return (
		<div
			style={{
				border: '2px solid gray',
				borderRadius: '5px',
				backgroundColor: 'lightgray',
				height: ' 200px',
				width: '200px',
				// float: 'left',
			}}>
			<h3>{props.name}</h3>
			<h5>{props.price}</h5>
			<button>BUY NOW</button>
		</div>
	);
}

function Person(props) {
	const personStyle = {
		border: '2px solid goldenrod',
		margin: '10px',
	};
	return (
		<div style={personStyle}>
			<h1>{props.name}</h1>
			<h3>Hero of the Year age is {props.age} </h3>
		</div>
	);
}

export default App;
