### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

  - React is a JavaScript library for building user interfaces, especially applications where data changes frequently. React is ideal when you need to build web applications with reusable components.

- What is Babel?

  - Babel is a JavaScript compiler that converts modern JavaScript syntax into syntax that browsers can understand.

- What is JSX?

  - JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.

- How is a Component created in React?

  - How is a Component created in React?
    A component in React can be created as either a function or a class:
    Function Component: Created by defining a JavaScript function that returns JSX.
    Class Component: Created by extending React.Component and implementing a render method that returns JSX.

- What are some difference between state and props?

  - State: A component’s local data, managed within the component and updated via setState (in class components) or hooks like useState in functional components.
  - Props: Data passed from a parent to a child component. Props are read-only in the child component, meaning they can’t be modified directly within the component.

- What does "downward data flow" refer to in React?

  - When data flows in a one direction from parent to child components.

- What is a controlled component?

  - A controlled component in React is an input element where the form data is handled by the React state. The component’s value is controlled by state, which is updated every time the user inputs new data. This approach enables React to directly manage the form’s data.

- What is an uncontrolled component?

  - An uncontrolled component is a form element where the input data is not handled by React’s state, allowing the DOM to retain its own form data. In this setup, values are accessed via refs instead of being stored in the component's state.

- What is the purpose of the `key` prop when rendering a list of components?

  - The key prop is used to uniquely identify each element in a list of components, helping React keep track of individual components during rendering.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  - Using an array index as a key can lead to issues if the list items are reordered, inserted, or deleted. Since React relies on key to track elements.

- Describe useEffect. What use cases is it used for in React components?

  - useEffect is a hook that allows you to perform side effects in function components, such as data fetching, subscriptions, and manual DOM manipulations. useEffect can be configured to run only when the component mounts, unmounts, or when certain dependencies change.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

  - useRef is a hook that creates a reference to store a mutable value or DOM element that persists across re-renders. Updating the value of a ref does not cause a component to re-render, which is useful for keeping values or accessing DOM nodes without triggering an update.

- When would you use a ref? When wouldn't you use one?

  - Use a ref when you need to directly access or manipulate a DOM element, store values that should persist between renders, or track mutable values that don’t need to trigger a re-render.
  - Don’t use a ref to store data that affects rendering, as it won’t trigger an update when changed. State is a better choice for values that need to affect the UI.

- What is a custom hook in React? When would you want to write one?
  - A custom hook is a reusable function that encapsulates logic using one or more of React's built-in hooks. Custom hooks are useful for abstracting complex logic (like API calls or form handling) into reusable, shareable logic between components. You’d write one when you want to extract and reuse component logic across multiple parts of an application.
