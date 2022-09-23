import React from "react";

interface WelcomeProps {
    message: string,
}
function Welcome(props: WelcomeProps) {
    return <h1>{props.message}</h1>;
}

export default Welcome;
