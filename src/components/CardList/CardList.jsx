export const CardList = ({data})=>{
    console.log(data)
    return <ul>{data.map(({id,name,age,city,email,isStudent,createdAt})=>{
        return(
            <li key={id}>
                <h2>{name}</h2>
                <p>{age}</p>
                <p>{city}</p>
                <a href={email}>{email}</a>
                <p>{isStudent}</p>
                <p>{createdAt}</p>
            </li>
    )
    })}</ul>
}