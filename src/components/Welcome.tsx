import * as React from "react";

interface WelcomeProps { firstName: string; lastName: string; };

const Welcome = (props: WelcomeProps) => {
    return (
        <h2>Hello {props.firstName} {props.lastName}</h2>
    );
}

export default Welcome;