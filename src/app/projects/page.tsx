import React, { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";
export const dynamic = "force-dynamic";
const ProjectsPage = async () => {
  return (
    <div className="p-20">
      <h1 className="mb-8 text-xl">Projects</h1>
      <ErrorBoundary fallback={<div>Cannot fetch projects curently</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ProjectsPage;
