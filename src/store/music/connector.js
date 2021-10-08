import { connect } from "react-redux";
import * as actions from "./actions";

function mapState({ music: { searchText } }) {
  return {
    searchText,
  };
}

export default connect(mapState, actions);
