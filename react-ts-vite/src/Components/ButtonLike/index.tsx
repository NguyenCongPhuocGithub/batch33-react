import React from 'react'
import {AiOutlineLike} from 'react-icons/ai'
const ButtonLike = () => {
    const [Liked, setLiked] = React.useState(false);
    const LikeState = () => {
        setLiked(!Liked);
    }
    return (
        <>
            <button onClick={LikeState} style={{color : Liked && Liked === true ? "blue" : ''}}>
                    <AiOutlineLike/>
            </button>
        </>
    )
}

export default ButtonLike