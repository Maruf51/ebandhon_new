import './JobCircular.css';
import job from '../../images/main slider/job.jpg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useEffect } from 'react';

const JobCircular = () => {
    useEffect(() => {
        document.title = "Job Circular | E-Bandhon"
      }, [])
    return (
        <>
            <Header />
            <div className="job_circular container text-center">
                <img className='mt-4' src={job} alt="" />
            </div>
            <Footer />
        </>
    )
}

export default JobCircular;