import './Jobs.scss';
import location from '../../img/icons/location.svg';
const Jobs = () => {
    return (
        <section className='job-wrapper'>
            <div className="job-item">
                <a href="#">Менеджер-дизайнер</a>
                <p>З/п от 70000 rub   Полный рабочий день</p>
                <img src={location} alt="location-icon"/><p>Новый уренгой</p>
            </div>
            <div className="job-item">

            </div>
            <div className="job-item">

            </div>
            <div className="job-item">

            </div>
        </section>
    )
}

export default Jobs;