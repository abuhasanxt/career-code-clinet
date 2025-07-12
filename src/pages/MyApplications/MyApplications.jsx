import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../Hooks/useAuth";
import { MyApplicationsPromise } from "../../api/applications.api";




const MyApplications = () => {
    const {user}=useAuth();
  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <ApplicationList 
        MyApplicationsPromise={MyApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
