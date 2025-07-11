import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = useAuth();
  console.log(jobId, user);

  const handleApply = (e) => {
    e.preventDefault();

    const form=e.target;
    const linkedIn=form.linkedIn.value;
    const github=form.github.value;
    const resume=form.resume.value;
    console.log(linkedIn,github,resume);
  };

  return (
    <div>
      <h3 className="text-4xl">Apply  for this job: <Link to={`/jobs/${jobId}`}> Details</Link> </h3>

      <form onSubmit={handleApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedIn"
            className="input"
            placeholder="LinkedIn Profile Link"
          />

          <label className="label">Github Link</label>
          <input type="url"
           className="input" 
           name="github"
           placeholder="Github Lick" />

          <label className="label">Resume Link</label>
          <input type="url"
           className="input"
           name="resume"
            placeholder="Resume Link" />

          <input type="submit" className="btn" value="Apply Now" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
