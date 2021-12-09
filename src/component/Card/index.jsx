import React from "react";

const Card = (props) => (
<div className="text-block">
<h3> {props.title} </h3>
<p> {props.content} </p>
</div>
)

export default Card