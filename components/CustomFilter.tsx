"use client";
import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { userAgent } from "next/server";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const updateHandleParams = (e: { title: string; value: string }) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("limit", "9");
    searchParams.set(title, e.value.toLowerCase());

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          updateHandleParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className={`custom-filter__btn`}>
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in dutation-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`custom-filter__options`}>
              {options.map((option) => (
                <Listbox.Option
                  value={option}
                  key={option.title}
                  className={({ active }) =>
                    `relative py-2 px-4 cursor-default select-none ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
