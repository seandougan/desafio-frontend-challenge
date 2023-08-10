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

    return (
        <div className="capitalListing">
            <table>
                <tbody>
                {cities.map((item, index) => (
                    index % 2 === 0 ? (
                        <tr key={index}>
                            <td>{item}</td>
                            {cities[index + 1] && <td>{cities[index + 1]}</td>}
                        </tr>
                    ) : null
                ))}
                </tbody>
            </table>
        </div>
    );

}