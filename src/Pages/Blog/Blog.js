import React from 'react';

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-4 w-9/12 mx-auto my-10 p-10'>
            <div className='bg-slate-500 p-5 rounded shadow'>
                <p className='text-lg font-medium text-gray-300 '>What are the different ways to manage a state in a react application?</p>
                <p> React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
            </div>
            <div className='bg-slate-500 p-5 rounded shadow'>
                <p className='text-lg font-medium text-gray-300 '>what are the different ways to manage a state in a react application</p>
                <p>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app</p>
            </div>
            <div className='bg-slate-500 p-5 rounded shadow'>
                <p className='text-lg font-medium text-gray-300 '>What is unit test ?Why sould we write unit tests?</p>
                <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class</p>
            </div>
        </div>
    );
};

export default Blog;