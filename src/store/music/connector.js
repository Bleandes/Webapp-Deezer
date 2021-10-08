import { connect } from "react-redux";
import * as actions from "./actions";

function mapState({ music: { searchText, searchResult, player, favorites } }) {
  return {
    searchText,
    searchResult,
    player,
    favorites,
  };
}

export default connect(mapState, actions);
