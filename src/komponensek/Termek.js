function Termek(props)
{
    return (
        <div className="border">
            <h3>{props.cim}</h3>
            <img src={props.src} alt={props.alt} className="p-2" />
            <p>{props.leiras}</p>
        </div>
    );
}

export default Termek;