import React from "react";

const AddJob = () => {
  const handleAddAJob = (e) => {
    e.preventDefault();

const form=e.target;
const formData=new FormData(form);
const data=Object.fromEntries(formData.entries());
console.log(data);

  };

  return (
    <div>
      <h2 className="text-3xl text-center">Please add a job</h2>
      <form onSubmit={handleAddAJob} className="w-xs mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input"
            name="company"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="url"
            className="input"
            name="company_logo"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job Type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend">Job Type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Dateline */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend">Application Dateline</legend>

          <input type="date" 
          name="dateLine"
           className="input" />
        </fieldset>
        {/* Salary Range */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                className="input"
                name="min"
                placeholder="Minimum Salary"
              />
            </div>
            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input"
                name="max"
                placeholder="max Salary"
              />
            </div>
            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USE </option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* Job Description */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend"> Job Description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder=" Job Description"
          ></textarea>
        </fieldset>
        {/* Job Requirements */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="  Requirements(separate by coma)"
          ></textarea>
        </fieldset>
        {/* Job Responsibility */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            name=" responsibilities"
            placeholder="Responsibilities(separate by coma)"
          ></textarea>
        </fieldset>

        {/* HR Related Info */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input"
            name="hr_name"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            className="input"
            name="hr_email"
            placeholder="HR Email"
          />
        </fieldset>

        <input className="btn " type="submit" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
