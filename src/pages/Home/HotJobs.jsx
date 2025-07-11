import React, { useEffect, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {

     const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise
      .then((data) => setJobs(data))
      .catch((err) => console.error('Error loading jobs:', err));
  }, [jobsPromise]);

    
    return (
            <div >
                <h2 className='text-4xl font-bold text-center py-4'> Hot Jobs of the Day</h2>
     <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {
            jobs.map(job=><JobCard job={job} key={job._id}></JobCard>)
        }
     </div>
    </div>

    );
};

export default HotJobs;