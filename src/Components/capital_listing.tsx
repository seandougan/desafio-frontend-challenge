import React from 'react';

export interface Capital_listing {
    items : string[]
}
export const Capital_listing : React.FC<Capital_listing> = ({items} : Capital_listing) => {
    return(<div className={"capitalListing"}>
        {items.map((item, index) => (
            <div key={index}>{item}</div>
        ))}
    </div>);
}