import React from 'react';

class Item extends React.Component{
  constructor(props){
    super(props);
  }

  submitItem(input){
    alert('Submitted')
  }

  render(){
    let titleInput;

    return(
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.items.map((n, i) => <li key={i}>{n.title}</li> )}
        </ul>
        <div>
          <h3>Items Form</h3>
          <form onSubmit={e => {
            e.preventDefault();
            var input = {title: titleInput.value};
            this.submitBook(input);
            e.target.reset();
          }}>
            <input type="text" name="title" ref={node => titleInput = node}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Item;
