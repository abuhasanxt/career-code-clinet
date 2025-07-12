import React from "react";

const JobApplicationRow = ({application,index}) => {
    const {company,title,company_logo, github,resume}=application;
  return (
    <tr>
      <th>
        <label>
         {index+1}
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={company_logo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{title}</div>
          </div>
        </div>
      </td>
      <td>
      {github}
      </td>
      <td>{resume}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default JobApplicationRow;
