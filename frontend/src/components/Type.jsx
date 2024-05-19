export default function Type({ types }){
    const slicedTypes = types.slice(0, 18)

    return(
        <article>
            <ul className="types">
                {slicedTypes.map((type, index) =>(
                    <li key={index}>{type.name}</li>
                ))}
            </ul>
        </article>
    )
}