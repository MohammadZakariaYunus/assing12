import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-3xl my-5'>Blog</h1>
            <p>1. How will i improve the performance of a React Application?</p>
            <br />
            <p>ANS. Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
                Lazy loading images in React.</p>
            <br />
            <p>2. What are the different ways to manage a state in a React application?</p>
            <br />
            <p>ANS.  There are four main types of state you need to properly manage in your React apps: Local state. Global state. Server state. URL state.</p>
            <br />
            <p>3. How does prototypical inheritance work?</p>
            <br />
            <p>ANS. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <br />
            <p>4. What is a unit test? Why should write unit tests?</p>
            <br />
            <p>ANS. In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.</p>
            <br />
            <p>5. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
            <br />
            <p>ANS. A Set stores unique values, so unless you want to code the part where you filter out duplicated values, creating a new Set each time would be ok.Once we are done with it, we use the setState() method to change the state object. It ensures that the component has been updated and calls for re-rendering of the component. setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.</p>
        </div>
    );
};

export default Blog;