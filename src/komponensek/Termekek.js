import Termek from "./Termek";

function Termekek(props)
{
    return (
        <section className="d-flex flex-wrap justify-content-around p-2">{
            props.termekek.map((elem, index) => (
                <Termek key={index} cim={elem.cim} src={elem.kep} alt={elem.alt} leiras={elem.leiras} />
            ))
        }</section>
    );
}

export default Termekek;