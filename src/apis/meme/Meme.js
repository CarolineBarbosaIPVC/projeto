import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []); // only render one time, no depenedencies

  // console.log(allMemeImages);

  const getMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => {
      // remember the last meme
      return {
        ...prevMeme, // keep the data from the last meme
        randomImage: url // replace the data from the last meme with this random url
      };
    });
  };

  function handleChange(e) {
    const { value, name } = e.target; //tricky

    setMeme((prevText) => {
      return {
        ...prevText,
        [name]: value // tricky
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button className="form--button" onClick={getMeme}>
          Get a new meme 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
