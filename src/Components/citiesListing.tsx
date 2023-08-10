import React from 'react';
import {CanadianCities} from "../Types/Enums/CanadianCities";

export interface CanadianCityListing {
    cities: string[]
}

 export const cityListing : CanadianCityListing = { cities:
            [CanadianCities.Toronto, CanadianCities.Winnipeg, CanadianCities.Montreal, CanadianCities.Vancouver, CanadianCities.Halifax,
                CanadianCities.StJohns, CanadianCities.Charlottetown
        ]};

export const CanadianCityListing : React.FC<CanadianCityListing> = ({ cities } : CanadianCityListing) => {

    return(
        <div className={"capitalListing"}>
            <ul>
                {cities.map((item) => (
                    <li key={item.valueOf()}>{item.valueOf()}</li>
                ))}
            </ul>
        </div>
    );
}