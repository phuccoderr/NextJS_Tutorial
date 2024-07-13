import React from "react";

const ProjectList = async () => {
  const response = await fetch("http://localhost:3001/repos", {
    cache: "no-store",
  });
  const repos = await response.json();
  throw new Error("ẻoo");

  return (
    <ul>
      {repos.map((repo: any) => (
        <li key={repo.id}>
          <div>{repo.title}</div>
          <div>{repo.description}</div>
          <div>{repo.stargazers_count}</div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
