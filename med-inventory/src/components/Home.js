import React from "react";

export default function Home(props) {

  return (
    <div>
      Hello, {props.user.displayName}
    </div>
  );
}

