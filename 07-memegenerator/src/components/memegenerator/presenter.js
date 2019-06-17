import React from "react"

export default props => {
    
    return (
        <div className="meme-container">
            <form className="meme-form" onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={props.topText}
                    onChange={props.handleChange}
                /> 
                <input 
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={props.bottomText}
                    onChange={props.handleChange}
                /> 
            
                <button>Gen</button>
            </form>
            <div className="meme">
                <img src={props.randomImg} alt="" />
                <h2 className="top">{props.topText}</h2>
                <h2 className="bottom">{props.bottomText}</h2>
            </div>
        </div>
    )
}