import './experience.css';
export default function Experience(experience){
    return (
        experience.experience.map(x => {
            return(
                <div className='container' key={x.id}>
                    <h5>{x.place}</h5>
                    <h6>{x.start} - {x.end} (as {x.name})</h6>
                    <p className='p'>{x.summary}</p>
                </div>
            )
        })
    );
}