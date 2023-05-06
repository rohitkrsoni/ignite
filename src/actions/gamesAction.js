import axios from "axios";
import { popularGamesURL, upcomingGamsesURL, newGamesURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesDate = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamsesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesDate.data.results,
    },
  });
};
