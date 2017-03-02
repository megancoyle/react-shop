import React from 'react';
import { connect } from 'react-redux';
import * as itemActions from '../../actions/itemActions';

class Item extends React.Component{
  constructor(props){
    super(props);
  }

  submitItem(input){
    this.props.createItem(input);
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
            this.submitItem(input);
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

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: item => dispatch(itemActions.createItem(item))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
