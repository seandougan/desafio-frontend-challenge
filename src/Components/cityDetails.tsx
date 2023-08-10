import React, {ReactElement} from 'react';
export interface Capital_details {
    capitals : Capital[]
}

export interface Capital {

}

export const Capital_details : React.FC<Capital_details> = () => {
    return(
        <div className={"capitalDetails"}>

        </div>
    );
}