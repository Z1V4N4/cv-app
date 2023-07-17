export default function Certification(certificate){
    return (
        <div className="container">
            {certificate.certificate?.map(x => {
                return (
                    <li key={x.id}>{x.publisher}, {x.name} certification</li>
                )})
            }
            <p></p> 
        </div>
    )
}