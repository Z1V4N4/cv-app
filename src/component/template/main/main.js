import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import Navbar from '../../organism/navbar/navbar';
import Header from '../../organism/header/header';
import Profile from '../../organism/profile/profile';
import Tile from '../../organism/tile/tile';
import Footer from '../../organism/footer/footer';
import Experience from '../../organism/experience/experience';
import Training from '../../organism/training/training';
import Certification from '../../organism/certification/certification';
import Education from '../../organism/education/education';

export default function Main(data){
    return (
        <div className='container' id='main'>
            <Navbar className='navbar'></Navbar>
            <div className='content'>
                <Header data={data.data} nama={'Profile'}></Header>
                <Profile employee={data.data?.employee}></Profile>
                <Header data={data.data} nama={'Skill & Tool'}></Header>
                <Tile skill={data.data?.skill} tool={data.data?.tool}></Tile>
                <Header data={data.data} nama={'Profesional Experience'}></Header>
                <Experience experience={data.data?.experience}></Experience>
                <Header data={data.data} nama={'Training'}></Header>
                <Training training={data.data?.training}></Training>
                <Header data={data.data} nama={'Certification'}></Header>
                <Certification certificate={data.data?.certificate}></Certification>
                <Header data={data.data} nama={'Education'}></Header>
                <Education education={data.data?.education}></Education>
            </div>
            <Footer className='footer'></Footer>
        </div>
    )
}