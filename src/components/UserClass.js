import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <h1>
        {name}, count:{count}
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        ></button>
      </h1>
    );
  }
}

export default UserClass;

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     const { name } = this.props;
//     return (
//       <div className="user-card">
//         <h2>{name}</h2>
//         <h3>Count :{this.state.count}</h3>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Count increase
//         </button>
//         <h3>Location: bhilwara</h3>
//         <h3>contact:@Deepakfeb2</h3>
//       </div>
//     );
//   }
// }

// export default UserClass;
