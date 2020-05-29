import React from "react";

interface ISubheaderProps{
    title: string,
}

const Subheader: React.FC<ISubheaderProps> = ({title}) => (


<header className="text-primary foot">
    <h2 className=" text-center cambia">{title}</h2>
</header>

)

export default Subheader;