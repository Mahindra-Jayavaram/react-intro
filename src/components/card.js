export const Card = ({items})=>{

    return (
        items.map((e)=>
        (
            <div>
                <h1>{e.heading}</h1>
                <ul>
                    {e.info.map((item)=>(
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        ))
    )
}