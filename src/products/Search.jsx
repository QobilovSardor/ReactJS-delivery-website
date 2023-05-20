import React, {useState} from 'react';


function Search({cb = Function.prototype}) {
	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handlerKey = (e) => {
		if(e.key === 'Enter'){
			handleSearch();
		}
	}

	const handleSearch = () => {
		cb(value)
	}
	return (
		<div>
			<div className="header-search pr">
				<img className="search-icon pa" src="images/seacrch-icon.svg" alt="" />
				<input type="text" value={value} onChange={handleChange} placeholder="Найти ресторан или блюдо" onKeyDown={handlerKey} />
				<button onClick={handleSearch} type='button' className="btn">Поиск</button>
			</div>
		</div>
	)
}

export default Search