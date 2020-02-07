import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

// import { MDBCol } from "mdbreact";
// searchbar docs: https://mdbootstrap.com/docs/react/forms/search/

// const Searchbar = () => {
//   return (
//     <MDBCol md="6">
//       <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
//     </MDBCol>
//   );
// }
// export default Searchbar;

  export default class Searchbar extends Component {

    data = [
      {
        key: 'john',
        value: 'John Doe',
      },
      {
        key: 'jane',
        value: 'Jane Doe',
      },
      {
        key: 'mary',
        value: 'Mary Phillips',
      },
      {
        key: 'robert',
        value: 'Robert',
      },
      {
        key: 'karius',
        value: 'Karius',
      },
    ]

    render() {
      return (
        <ReactSearchBox
          placeholder="Search for John, Jane or Mary"
          data={this.data}
          onSelect={record => console.log(record)}
          onFocus={() => {
            console.log('This function is called when is focussed')
          }}
          onChange={value => console.log(value)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          value="John"
        />
      )
    }
  }