---
noteId: "03208220d87811ecbc1eb3a5e4b11263"
tags: []

---
# High Order Components (HOC)

>this is the first patter and is just a recap because it prepares you for the hooks patter, normally a HOC is just a function that returns a component with an extra layer of functionality

this is just an example of this patter being used

```javascript

const BaseComponent = () =>{


const Parent = (props) =>{
// in this HOC you can add extra layers of fucntionality that the child component may not be aware of
    return (
        <ChildComponent props={...props} > </ChildComponent>
    )
}
const ChildComponent = () =>{
    <h2>
    this is a component that does nothing
    </h2>
}

return(<Parent/> )
}

```

# Custom Hooks
> the custom hooks patter starts with a function that will only be used when the following criteria is complete

* start with a naming convection of  **use**
* only can be used inside a React Component

this is an example of a custom hook
the purpose of this hook is to attach a url to a reactive variable 
```javascript


import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;

```
inside this we are using a useState and useEffect , that both of them are react hooks, which lets us compose a custom hook to perform a fetch request, we could always achieve this by using a HOC but this is a more suttle way and the more reactish approach.


## Compound Pattern

> The compound pattern aims to not only show the user what components are child of this, but also to use a context that connects each child but also makes a distinction between them . you can think of this like a train in which each train carriage has some similar features but also this showcase their differences you can se the following example for this pattern design 

```javascript
function Example() {
  return (
    <Menu>
      <MenuButton>Actions</MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuLink to="view">View</MenuLink>
      </MenuList>
    </Menu>
  );
}
```

another example of this pattern being used is with a simple select and option from HTML 


```javascript
<select>
  <option value="volvo">Volvo</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

```
always remember to use the props.children so that you can render the childs inside the parent as the following example can showcase this 

#### **Parent.jsx**

```javascript
import React from "react";
export default (props) => {
  return (
    <>
      <h2>Im the parent component</h2>
      {props.children}
    </>
  );
};


```

#### **Child.jsx**

```javascript
import React from "react";
export default (props) => {
  return (
    <>
      <h2>{props.message}</h2>
    </>
  );
};


```
#### **Wrapper.jsx**
```javascript
import "./styles.css";
import Child from "./components/Child";
import Parent from "./components/Parent";
export default function App() {
  return (
    <div className="App">
      <Parent>
        <Child message="algo"></Child>
        <Child message="something else"></Child>
      </Parent>
    </div>
  );
}

```


## **Reusable styles**

> although this is not a component patter of design it is a good approach to always let the user that is currently using our component to let them customize whatever styles they are using by exposing this as a property

* there are 3 different ways to handle this, 
the first one is to use a inline style property to customize the component.

* the second one is to expose the className property and use that inside the component

* the third one would be to use a theme file where the whole webapp styles are defined by instance chakra UI has this option and also others ui frameworks have this option too

---
# Examples

### **Pasing the inline style property**
in order to do this you would need to pass an empty object as a default value and rename the property that way you are not overriding the style variable

```javascript
import React from "react";
export default ({style:userStyle = {}}) => {
  return (
    <>
      <h2 style= {userStyle}>{props.message}</h2>
    </>
  );
};


```
when you are calling this component you can now pass the style property as the following example

```javascript
import React from "react";
import ChildComponent from "./components/CustomComponent";
export default (props) => {
  return (
    <>
      <ChildComponent style={{color:"red"}} />
    </>
  );
};
```

### **Passing ClassName as property**
in order to do this you need to pass a property as a className and then what you want to do is append the className to the internal css

'internal css class' + " " + 'custom css by the user '


```javascript
import React from "react";
import ChildComponent from "./components/CustomComponent";
import CustomStyles from "./customStyles";
export default ({className:userStyle= {}}) => {
  const styles = [CustomStyles,userStyle].join(" ").trim();
  return (
    <>
      <ChildComponent ClassName = {styles} />
    </>
  );
};
```



---
## Control Props

### **The problem to be solved**

>when you have a compound component what it misses is to allow the user to completly handles its state and also what to do with the callback, this is solved by passing the callback and the initial value to the child component as a property you can see a more detailed explanation on the react form documentation.


childComponent 
```javascript
import React,{useState} from "react";
export default ({values:userValue = null, callback: userCallback= null}) => {
  const isControlled =  !! userValue && userCallback 
  const [localstate,setLocalState]= useState(null);
  const onChangeLocal = () =>{
    //.... something to do here
  }
  return (
    <>
      <input value = {isControlled? localstate : userValue} onChange = {isControlled ? userCallback:onChangedLocal} />
    </>
  );
};
```
parent calling child component example
```javascript
import React,{useState} from "react";
import ChildComponent from "./components/ChildComponent";
export default () =>{
  const customEventhandler = (e) =>{

  }
  return (
    <ChildComponent value={7} callback = {customEventhandler}  >
  )
}
```


---
# Props Collection

>this chapter is about an export strategy to submit to the user all the hooks that were build and also all the components .
you can have several ways to do a props collection basically all it does is to provide a way to get all the props that are needed and use the spread operator to set them up you can use a hook for this or you can use something else to do that.

---
## Examples

a really simple hook 
```javascript
import React,{useState}from "react";
function useCustomHook (initialNumericValue) =>{
const [value,setValue ] = useState(initialNumericValue);

const defaultProps = {
value,onChange:setValue
}

const addsOneMore = (value) =>{
setValue(value + 1);
}

return {value,addsOneMore,defaultProps};
}

```
```javascript
import React,{useState} from "react";
import ChildComponent from "./components/ChildComponent";
import useCustomHook from "./hooks/useCustomHook";
const {value,addsOneMore,defaultProps} = useCustomHook;
export default () =>{
  const customEventhandler = (e) =>{

  }
  return (
    <ChildComponent {...defaultProps}  >
  )
}
```
---
# Props Getters 
>so while props collection allows the user to set a specific set of properties while at the same time kind of being restricted with the props that it returns, props getters is a function that resolves this problem using a function that accepts a property to be customized and returns all the other properties with the same default value plus the new ones.

## Example 
first you need a function that is being returned with the properties seted as default
```javascript
import React,{useState}from "react";
function useCustomHook (initialNumericValue) =>{
const [value,setValue ] = useState(initialNumericValue);

const defaultProps = (otherprops,userprops:otherprops = {}) => {
value,onChange:setValue,
...otherprops
}

const addsOneMore = (value) =>{
setValue(value + 1);
}

return {value,addsOneMore,defaultProps};
}

```
this will need return a function called defaultProps that accepts a object with the new properties needed
```javascript
import React,{useState} from "react";
import ChildComponent from "./components/ChildComponent";
import useCustomHook from "./hooks/useCustomHook";
const {value,addsOneMore,defaultProps} = useCustomHook;
export default () =>{
  const customEventhandler = (e) =>{

  }
  return (
    <ChildComponent {defaultProps({fooprop:'barobject'})}  >
  )
}

```
---
# Initial State patter
> this pattern help us out to set a default state value for a component and also to reset the state at any given time , and to handle a custom initial state from the user.
---
### Example
---



## Example 
first you need a function that is being returned with the properties seted as default, then you can add the initial value variable and add a function that checks wether or not a value was passed down to the hook, the you can add a reset function that allows you to reset the state  
```javascript
import React,{useState}from "react";
function useCustomHook (initialNumericValue:customInitialValue = 10) =>{
const INITIAL_DEFAULT_VALUE = 10
const [value,setValue ] = useState(customInitialValue? customInitialValue: INITIAL_DEFAULT);


const defaultProps = (otherprops,userprops:otherprops = {}) => {
value,onChange:setValue,
...otherprops
}

const reset = function ()
{
  setvalue(INITIAL_DEFAULT_VALUE);
}

const addsOneMore = (value) =>{
setValue(value + 1);
}

return {value,addsOneMore,defaultProps,reset};
}

```
this will need return a function called defaultProps that accepts a object with the new properties needed
```javascript
import React,{useState} from "react";
import ChildComponent from "./components/ChildComponent";
import useCustomHook from "./hooks/useCustomHook";
const {value,addsOneMore,defaultProps,reset} = useCustomHook;
export default () =>{
  const customEventhandler = (e) =>{
  }
  const resetInitialValueBtn = () =>{
    reset();
  }
  return (
    <ChildComponent {defaultProps({fooprop:'barobject'})}  >
    <button onClick={resetInitialValueBtn} />
  )
}
```
# State Reducer Pattern
>so this pattern is just about  using the reducer pattern to pass down as a prop the reducer a use a the react context api to handle the states and the properties
by doing so we are going to need a reducer and also a hook


these are the actions allow in this example
```javascript
const actionTypes = {

  toggle: 'TOGGLE',
  on: 'ON',
  off: 'OFF',
}
```
this is the reducer

```javascript
function toggleReducer(state, action) {
  switch (action.type) {
    case actionTypes.toggle: {
      return {on: !state.on}
    }
    case actionTypes.on: {
      return {on: true}
    }
    case actionTypes.off: {
      return {on: false}
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`)
    }
  }
}

```
this is the hook that uses the previous reducer,

**React.useReducer** needs two parameters the first one is a reducer, and the second one is the default value for the states.
```javascript

function useToggle({reducer = toggleReducer} = {}) {
  const [{on}, dispatch] = React.useReducer(reducer, {on: false})

  const toggle = () => dispatch({type: actionTypes.toggle})
  const setOn = () => dispatch({type: actionTypes.on})
  const setOff = () => dispatch({type: actionTypes.off})

  return {on, toggle, setOn, setOff}
}
```


and last one the toggle component
```javascript
function Toggle() {
  const [clicksSinceReset, setClicksSinceReset] = React.useState(0)
  const tooManyClicks = clicksSinceReset >= 4

  const {on, toggle, setOn, setOff} = useToggle({
    reducer(currentState, action) {
      const changes = toggleReducer(currentState, action)
      if (tooManyClicks && action.type === actionTypes.toggle) {
        // other changes are fine, but on needs to be unchanged
        return {...changes, on: currentState.on}
      } else {
        // the changes are fine
        return changes
      }
    },
  })

  return (
    <div>
      <button onClick={setOff}>Switch Off</button>
      <button onClick={setOn}>Switch On</button>
      <Switch
        onClick={() => {
          toggle()
          setClicksSinceReset(count => count + 1)
        }}
        on={on}
      />
      {tooManyClicks ? (
        <button onClick={() => setClicksSinceReset(0)}>Reset</button>
      ) : null}
    </div>
  )
}
```