import React, { FC } from "react";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";
import { STATES } from "./constants";

export interface PageAddListingPageProps {}

const PageAddListingPage: FC<PageAddListingPageProps> = () => {
  return (
    <>
    
    <CommonLayout>
      <>
        {/* Contact Info */}
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-[auto_50px_auto] gap-8 md:gap-5">
                <FormItem label="First Name">
                <Input id="First Name" />
                </FormItem>
                <FormItem label="MI">
                <Input id="MI" />
                </FormItem>
                <FormItem label="Last Name">
                <Input id="Last Name" />
                </FormItem>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
                <FormItem label="Email">
                <Input id="Email" />
                </FormItem>
                <FormItem label="Phone Number">
                <Input id="Phone Number" />
                </FormItem>
            </div>
        </div>

        {/* Home Info */}
        <h2 className="text-2xl font-semibold">Home Address</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-5">
                <FormItem label="Street Address">
                    <Input id="Street Address" placeholder="Street Address" />
                </FormItem>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
                <FormItem label="City">
                <Input />
                </FormItem>
                <FormItem label="State">
                    <Select id="State">
                        <option selected value="Select State" disabled>Select State</option>
                        {STATES.map(i => <option value={i}>{i}</option>)}
                    </Select>
                </FormItem>
                <FormItem label="Postal code">
                <Input />
                </FormItem>
            </div>

        </div>

        {/* Personal Info */}
        <h2 className="text-2xl font-semibold">Personal Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
                <FormItem label="Date of Birth">
                <Input id="Date of Birth" />
                </FormItem>
                <FormItem label="Social Security Number">
                <Input id="Social Security Number" />
                </FormItem>
                <FormItem label="Driver's License Number">
                <Input id="Driver's License Number" />
                </FormItem>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
                <FormItem label="Residence Type">
                    <Select id="Residence Type">
                    <option value="Select Residence Type" selected disabled>Select Residence Type</option>
                    <option value="Rent">Rent</option>
                    <option value="Own">Own</option>
                    <option value="Live With Family">Live With Family</option>
                    </Select>
                </FormItem>
                <FormItem label="Monthly Payment / Rent">
                    <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                    </div>
                    <Input id="Monthly Payment / Rent" className="!pl-8 !pr-10" placeholder="0.00" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">USD</span>
                    </div>
                    </div>
                </FormItem>
            </div>
            <LicenseUpload />
        </div>

      </>
    </CommonLayout>
    </>
  );
};

function LicenseUpload() {
  return (
    <div>
      <span className="text-lg font-semibold">Upload Your License</span>
      <div className="mt-5 ">
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-neutral-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept="image/*, application/pdf"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              PNG, JPG, PDF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};


export default PageAddListingPage;
