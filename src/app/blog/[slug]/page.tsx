import { notFound } from "next/navigation";
import { title } from "process";
import React, { cache, ReactNode } from "react";

const titles = {
  first: "Hello First!",
  second: "Hello Second!",
};

const getPost = cache();

export const generateMetadata = async (
  { params, searchParams }: { params: any; searchParams: any },
  parent: any
) => {
  const description = (await parent).description ?? "Default description";

  return {
    title: titles[params.slug],
    description,
  };
};

const BlogPage = ({ params }: any) => {
  if (Math.random() > 0.5) throw new Error("not working");

  if (!["first", "second"].includes(params.slug)) {
    notFound();
  }

  return <div>BlogPage + {params.slug}</div>;
};

export default BlogPage;
