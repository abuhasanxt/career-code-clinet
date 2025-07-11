import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    _id,
    description,
    salaryRange,
    requirements,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
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
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`jobs/${_id}`}>
            {" "}
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
