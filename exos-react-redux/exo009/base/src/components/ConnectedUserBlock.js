import React from "react";
import {connect} from "react-redux";
import UserBlock from "./UserBlock";


const mapStateToProps = (state) => {
  return {
    user : state.user
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBlock);