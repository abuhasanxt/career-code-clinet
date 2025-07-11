import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    title,
    location,
    jobType,
    category,
    hr_email,
    hr_name,
    description,
    salaryRange,
    requirements,
    _id,
    company,
    responsibilities,
    company_logo,
  } = useLoaderData();

  return (
    <div className="card bg-base-100 w-full shadow-sm my-10">
      <div className="flex gap-2 items-center">
        <figure>
          <img className="w-16" src={company_logo} alt="company_logo" />
        </figure>
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex gap-1 items-center">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Email: {hr_email}</h2>
        <h2 className="card-title">Name: {hr_name}</h2>
        <div className="flex">
          <p>JobType: {jobType}</p>
          <p>category: {category}</p>
        </div>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <div>
          {responsibilities.map((responsibility, index) => (
            <p className="text-xl" key={index}>
              {responsibility}
            </p>
          ))}
        </div>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <Link to={`/jobApply/${_id}`}>
         <button className="btn btn-primary w-full">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
