// by convention, we use `with...` prefix to indicate this is a High Order Component
// The HoC is just a simple function that need to return a new class
// We pass as a parameter the Component class that needs to render
export default function withRandomNumber(WrappedComponent) {
  // this is a special javascript ES6 synthax that allow to return anonymous class
  // the class will be another component so we have to extends React.Component like a normal component
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomNumber: 1,
      }
    }
    // as usual the render function is the only function mandatory in a React component
    // we could also use normal events like `componentDidMount`, etc.
    // think of this as a normal component
    render() {
      // we then return in the render function the rendered component (with </ > to indicate we render the component as WrappedComponent is only a class)
      return <WrappedComponent
        // we pass the extra data we wanted, in this case our HoC just return a "random" number.
        // it could be anything that need to be reused (like hooks basically)
        randomNumber={this.state.randomNumber}
        // we then "spread" the props we received down to the WrappedComponent
        // this basically just pass the props from the top component to the other
        {...this.props}
      />;
    }
  };
}
