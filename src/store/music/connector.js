import { connect } from "react-redux";
import * as actions from "./actions";

function mapState({ music: { searchText, searchResult, player } }) {
  return {
    searchText,
    searchResult,
    player,
  };
}

export default connect(mapState, actions);
