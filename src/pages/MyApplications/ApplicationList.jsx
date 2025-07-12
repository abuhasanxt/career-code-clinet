import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ MyApplicationsPromise }) => {
  const applications = use(MyApplicationsPromise);

  return (
    <div>
      <text className="3xl">Job applied so far: {applications.length}</text>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
               #
                </label>
              </th>
              <th>Name</th>
              <th>Github Link</th>
              <th>Resume Link</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application,index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
