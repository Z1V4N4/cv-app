import './training.css';

export default function Training(training){
    return (
        training.training.map(x => {
            return(
                <div className='container' key={x.id}>
                    <h6>{x.name} at {x.place}</h6>
                    <p className='p'>{x.summary}</p>
                </div>
            )
        })
    );
}