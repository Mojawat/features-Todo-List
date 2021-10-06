import React from 'react';

export const About = () => {
    const aboutStyle = {
        color: "White",
        // backgroundColor: "cyan",
        width:"bold",
        padding: "20px",
        textAlign: 'center',
    }
    return (
        <div style={aboutStyle}>
            <h3 >This is my About Page</h3>
            <p>
                Like a scene in a movie or a verse in a song,
                paragraphs are the building blocks of any good piece of writing. <br />
                Paragraphs lend a natural rhythm to your writing that makes it a joy to read. The question is,
                how do you handle them successfully?<br />
                Below, we take a close look at what makes up an effective paragraph and explain how to write one that suits your needs.<br />
                We also cover some advanced tips. But first, let’s start with the fundamentals.
            </p>
        </div>
    )
}
