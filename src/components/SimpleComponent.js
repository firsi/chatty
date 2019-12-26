import React from 'react';
import withRandomNumber from "./withRandomNumber";

// We create a simple component that is going to render the random number passed as a props
class SimpleComponent extends React.Component {
  render = () => {
    return <p>The random number is {this.props.randomNumber}</p>
  }
}

// then we use our `withRandomNumber` HoC and export it as a default export
// so we can do `import SimpleComponent from "./path/to/SimpleComponent";`
// and the props randomNumber will be invisibly injected via our HoC without the component using it knowing about it
export default withRandomNumber(SimpleComponent);
