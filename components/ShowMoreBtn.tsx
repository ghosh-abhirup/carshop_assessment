"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";

const ShowMoreBtn = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const newLimit = (pageNumber + 1) * 9;
    searchParams.set("limit", newLimit.toString());

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMoreBtn;
