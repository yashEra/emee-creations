import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
const TextEffect = ({ text1, text2, text3, text4 }) => {
    return (
        <>
            <ReactTypingEffect
                text={[text1, text2, text3, text4]}
                speed={50}
                eraseDelay={2000}
                eraseSpeed={50}
                typingDelay={500}
            />
        </>
    );
};

export default TextEffect;