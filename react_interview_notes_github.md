
# React.js Interview Questions & Notes

## Table of Contents
- React Fundamentals
- Hooks
- Context API
- Redux
- Flux
- Performance & Optimization
- Miscellaneous

---

## React Fundamentals

### What is the Virtual DOM and how does React use it?
React uses a virtual representation of the DOM to compare changes efficiently and update only the required parts of the real DOM.

### Difference between React.createElement and JSX
- `React.createElement()` is the function used by React to create elements.
- JSX is syntactic sugar that compiles to `React.createElement()` calls.

### Why are keys important in React lists?
Keys help React identify which items have changed, been added, or removed. They improve rendering performance.

### What are controlled vs uncontrolled components?
- **Controlled components**: Form data is handled by React state.
- **Uncontrolled components**: Form data is handled by the DOM itself.

---

## Hooks

### What are Hooks?
Hooks allow functional components to use state and lifecycle features.

### Rules of Hooks
1. Only call hooks at the top level.
2. Only call hooks inside React functions.

### Can hooks be used inside class components?
No. Hooks are designed to work only with functional components.

### Difference between `useState` and `useReducer`
- `useState` – simple state management.
- `useReducer` – complex state logic with reducer functions.

### Difference between `useMemo` and `useCallback`
- `useMemo` memoizes values.
- `useCallback` memoizes functions.

### What is `useRef`?
Used to persist values across renders and access DOM elements directly.

### What are custom hooks?
Custom hooks are reusable functions that encapsulate hook logic.

### How do you prevent unnecessary re-renders with hooks?
- `React.memo`
- `useMemo`
- `useCallback`

---

## Context API

### What is the Context API?
Context provides a way to pass data through the component tree without manually passing props.

### How do you create and consume context?
1. `React.createContext()`
2. Wrap components with `Provider`
3. Use `useContext()` to consume

### How do you provide default values in Context?
Provide a default value when calling `createContext(defaultValue)`.

### Limitations of Context API
- Not ideal for very large applications
- Frequent updates may cause re-renders

### Can Context replace Redux?
Context can replace Redux in small apps but lacks advanced state management capabilities.

---

## Redux

### What problem does Redux solve?
Redux provides predictable state management for large applications.

### Core principles of Redux
1. Single source of truth
2. State is read-only
3. Changes are made using pure functions (reducers)

### What is a reducer?
A reducer is a pure function that takes the current state and action and returns a new state.

### Role of actions in Redux
Actions are payloads that describe what happened in the application.

### How does middleware work in Redux?
Middleware intercepts actions before they reach reducers.

### Redux async tools
- redux-thunk
- redux-saga

### Difference between synchronous and asynchronous actions
- Sync actions update state immediately
- Async actions handle API calls before dispatching actions

---

## Flux

### What is Flux?
Flux is an architecture pattern for managing data flow in React applications.

### Main components of Flux
- Dispatcher
- Stores
- Views
- Actions

### Unidirectional data flow in Flux
Data flows in one direction:  
Action → Dispatcher → Store → View

### Difference between Flux and Redux
- Redux uses a single store
- Flux may use multiple stores

### How do stores work in Flux?
Stores hold application state and respond to dispatched actions.

---

## Performance & Optimization

### How do you optimize performance in React?
- Code splitting
- Lazy loading
- Memoization
- Virtualization for large lists

### Common performance issues in Redux
- Too many re-renders
- Large store updates

Solutions:
- Memoized selectors
- Splitting reducers
- Using normalized state

---

## Miscellaneous

### What are React Fragments?
Fragments allow grouping elements without adding extra nodes to the DOM.

### What are error boundaries?
Components that catch JavaScript errors in child components.

### How does React handle synthetic events?
React wraps browser events into a cross-browser wrapper called SyntheticEvent.

---

## Practice Tip

If you're preparing for interviews, practice:
- Hooks
- Redux data flow
- React performance optimization
- Component lifecycle

