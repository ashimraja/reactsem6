import * as React from 'react';
class Component1 extends React.Component{
    render(){
        return (
            <div>
                <h3>Component 1</h3>
                <h2>Component 1</h2>
                <h1>Component 1</h1>
                <Xyz/>
            </div>
           
        )
    }
}
export default Component1
class Xyz extends React.Component{
    render(){
        return (
            <div>
                <h1>Component 1</h1>
                <h2>Component 1</h2>
                <h3>Component 1</h3>
            </div>
        )
    }
}