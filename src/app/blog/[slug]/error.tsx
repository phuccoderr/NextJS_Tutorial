"use client";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

const BlogError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default BlogError;
