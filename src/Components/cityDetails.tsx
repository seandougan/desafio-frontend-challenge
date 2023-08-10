import React, {ReactElement} from 'react';
export interface CityDetails {
    capitals : Capital[]
}

export interface Capital {

}

export const Capital_details : React.FC<CityDetails> = () => {
    return(
        <div className={"capitalDetails"}>

        </div>
    );
}