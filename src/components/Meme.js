import React from "react";
import hulk from "../images/clickIt.png"
// import memeData from "./memeData"

export default function Meme () {


    const [allMemes,setAllMemes] = React.useState([]);

    React.useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))

    }, [])


    const [meme, setMeme] = React.useState({

        topText: "",
        bottomText: "",
        url: ""

    });

    function getNewMeme () {
        
        const memeArray = allMemes;
        const length = memeArray.length;
        const index = Math.floor(Math.random() * length);
        const URL = memeArray[index].url;

        setMeme(prevState => ({

            ...prevState,
            url: URL

        }));
    }


    function handleChange (event) {

        const {name , value} = event.target;

        setMeme (prevState => ({
            ...prevState,
            [name] : value
        }))
    }



    return (

        <div className="meme-container">

            <div className="form-container">

                <div className="inputs"> 
                    <input type="text" name="topText" id="topText" className="input" placeholder="Text at Top" onChange={handleChange}/>
                    <input type="text" name="bottomText" id="bottomText" className="input" placeholder="Text at Bottom" onChange={handleChange}/>
                </div>
                
                <div className="hulk-container">
                    <img src={hulk} alt="Here You Go Again!" className="hulk"/>  
                    <button className="submit" type="submit" onClick={getNewMeme}>Get a new Meme Image!</button>
                    {/* <span className="submit">Here You Go Again!</span> */}
                </div>
            </div>
 
            <div className="memeImage-container">

                <img src={meme.url} className="memeImage" alt="Meme"/>
                <p className="memeText top">{meme.topText}</p>
                <p className="memeText bottom">{meme.bottomText}</p>

            </div>

        </div>
    )
}

