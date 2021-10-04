---
title: "React Hooks Overview"
date: "October 03, 2021"
tag: "ReactJS"
---

# React Hooks Explained

## useState()

- The initial state value gets run every single time the component re-renders.

```jsx
import React, { useState } from 'react';

export default function App() {

	// runs everytime the component re-renders
	const [count, setCount] = useState(0);

	const [state, setState] = useState({ num: 3, color: "blue"});
	const num = state.num;
	const color = state.color; 

	// only gets run the first time 
	const [count, setCount] = useState(() => {
		return 4;
	});

  function decrementCount() {
		// this is the incorrect when basing off prev value
		// doing it twice only decrements by 1
		setCount(count - 1); 
		setCount(count - 1); 

		// this is correct
		// doing it twice it decrements by 2
		setCount(prevCount => prevCount - 1);
		setCount(prevCount => prevCount - 1);
	}

	function incNum() {
		// Exactly how state is updated in Redux
		setState(prevState => {
			return {...prevState, count: prevState.count - 1}
		})
	}

    return (
        <div>
            <button onClick={decrementCount}>-</button>
						<span>{count}</span> 
						<button onClick={incNum}>-</button>
        </div>
    )
};
```

- `setCount(count - 1)`  —> this is an incorrect way to update the state when it's based on the previous value of the state.
    - If you were to call this twice, you would *expect* it to decrement by two, but doing it this way makes the two setCounts override each other.
- in `setCount()` you can pass in a function that takes the previous value as a parameter —> `setCount(prevCount => prevCount - 1)`

---

## useEffect()

- useEffect() is good for performing side effects based on your state value changing.

 

```jsx
function App() {
	const [name, setName] = useState("posts");

	// Runs every time the component is re-rendered
	useEffect(() => {
		console.log("render"):
	});

	// Only runs in the beginning 
	useEffect(() => {
		console.log("render"):
	}, []);

	// Runs every time value of name changes (side effect)
	useEffect(() => {
		console.log("render"):
	}, [name]);

	return (
		<>
			<button onClick ={() => setName("posts")}>Posts</button>
			<button onClick ={() => setName("users")}>Users</button>
			<button onClick ={() => setName("comments")}>comments</button>
			<p>{name}</p>
		</>
	)
	
}
```

---

## useRef()

- Refs persist between renders of the component.
- Refs does not cause your component to re-render when it gets changed (unlike state)
- `useRef` returns an object with a current property this persists between re-renders
- It's completely separate from our component render cycle.
- It's similar to state because you can store a previous value in it.
- Common use case is to reference elements in your HTML.
- Each element has a `ref` attribute and you can set it to whatever ref you want
- Another use is to *store* the previous value of your state

```jsx
export default function App() {
	const [name, setName] = useState("");

	// useRef returns an object {current: 1}
	const renderCount = useRef(1);
	const inputRef = useRef();
	const prevNmae = useRef("");

	const focus = () => {
		console.log(inputRef.current); // returns <input value>
		inputRef.current.focus(); // focus goes to input text box
		inputRef.current.value = "Some value" // shows in text box but doesn't update state
	}	

	useEffect(() => {
		renderCount.current = renderCount.current + 1; 
	})

useEffect(() => {
	prevName.current = name;
}, [name])

	return (
		<>
			<input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
			<div>My name is {name} and it used to be {prevName.current}</div>
			<div>I rendered {renderCount.current} times</div>
			<button onClick={focus}>Focus</button>
		</>
	)
}
```

 

---

## useContext()

- Context Provider wraps around the components that need access to the information in the context
- In the Provider is a single prop `value`
- Everything in the provider (including the components' children) have access to the value
- Context is for passing down props all the way down into any children without having to do it manually
- Kinda like a global state

App.js

```jsx
import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = React.createContext();

export default function App() {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => {
		setDarkTheme(prevDarkTheme => !prevDarkThene);
	}

	return (
		<>
			<ThemeContext.Provider value={darkTheme}>
				<button onClick={toggleTheme}>Toggle Theme</button>
				<FunctionContextComponent />
			</ThemeContext.Provider>
		</>
	);	
}
```

FunctionContextComponent.js

```jsx
import React, { useContext } from "react";

export default function FunctionContextComponent() {
	// similar to passing down a prop 
	const darkTheme = useContext(ThemeContext);	

	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333"
	}

	return (
		<div style={themeStyles}>Hello</div>
	)
}
```

Make the above even easier by creating a custom hook! 

ThemeContext.js - this is going to take the place of `<ThemeContext.Provider>` that wrapped around the components. 

```jsx
import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React/createContext();

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}) {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => {
		setDarkTheme(prevDarkTheme => !prevDarkThene);
	}
		return (
			<ThemeContext.Provider value={darkTheme}>
				<ThemeUpdateContext.Provider value={toggleTheme}>
					{children}
				</ThemeUpdateContext>
			</ThemeContext.Provider>
		);
}
```

App.js

```jsx
import React, { useState } from "react";
import { ThemeProvider } from "./ThemeContext.js";
import FunctionContextComponent from "./FunctionContextComponent";

	return (
		<>
			<ThemeProvider>
				<FunctionContextComponent />
			</ThemeProvider>
		</>
	);	
}
```

FunctionContextComponent.js

```jsx
import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
	const darkTheme = useTheme();
	const toggleTheme = useThemeUpdate();

	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333"
	}

	return (
		<>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<div style={themeStyles}>Hello</div>
		</>
	)
}
```