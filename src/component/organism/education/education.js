export default function Education(education){
    return (
        <div className="container">
            {education.education?.map(x => {
                return (
                    <div key={x.id}>
                        <h4>{x.school} ({x.start} - {x.end})</h4>
                        <p>{x.description}</p>
                    </div>
                )})
            } 
        </div>
    )
}