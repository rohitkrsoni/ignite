import React from "react";
import { useNavigate } from "react-router-dom";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";

// Import UTIL
import { smallImage } from "../util";

// Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import playstation5 from "../img/playstation5.svg";

// Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = () => {
  const navigate = useNavigate();
  //Exit Detail
  const exitDetailHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.round(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars.push(<img alt="star" key={i} src={starFull} />);
      else stars.push(<img alt="star" key={i} src={starEmpty} />);
    }
    return stars;
  };

  // GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playstation5;
      case "PlayStation 4":
        return playstation;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      case "Xbox One":
        return xbox;
      default:
        return gamepad;
    }
  };
  // Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image || "", 640)}
                alt="Image"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image || "", 1280)}
                  key={screen.id}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
