export default function NameFunc(props) {
    const {name, lName} = props.person;



    const style = {
    "background" : "yellow",
    "color" : "green",
}

    return (
        <>
<h1 className="name" style={style}>
    {name } { lName}
    </h1>
    <button onClick={()=> alert('bbbaa')}>Click</button>
</>
    )
}