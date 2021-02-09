import React from 'react'

export default function Headline({header,desc}) {


    if(!header)
    {
        return null
    }

    return (
        <div data-Testid='HeadlineComponent' >
             <h1 data-Testid="header">{header}</h1>
                <p data-Testid="desc">
                    {desc}
                </p>
            
        </div>
    )
}


