import React from "react";
import { connect } from "react-redux";

const VisibilityFilters = ({ activeFilter }) => {
  return (
    <div className="visibility-filters">
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps
 
)(VisibilityFilters);