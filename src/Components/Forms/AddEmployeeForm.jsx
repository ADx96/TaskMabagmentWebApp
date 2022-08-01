import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import ProfileFileUpload from "./ProfileFileUpload";
import { Avatar } from "primereact/avatar";

const citySelectItems = [
  { label: "New York", value: "NY" },
  { label: "Rome", value: "RM" },
  { label: "London", value: "LDN" },
  { label: "Istanbul", value: "IST" },
  { label: "Paris", value: "PRS" },
];

const AddEmployeeForm = () => {
  const [selectedCountries, setSelectedCountries] = useState(null);
  const [data, setData] = useState({
    image: null,
  });

  return (
    <Card>
      <div className="col-12" style={{ marginTop: "-40px" }}>
        <Avatar
          label="P"
          image={data.image}
          style={{ width: "6rem", height: "6rem" }}
          className="mr-2"
          size="xlarge"
          shape="circle"
        />
      </div>
      <div className="formgrid grid">
        <div className="field col-12 md:col-4 p-1">
          <span className="p-float-label">
            <InputText
              id="TaskName"
              //   value={value2}
              //   onChange={(e) => setValue2(e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
            <label htmlFor="TaskName">Employee Name</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 p-1">
          <span className="p-float-label">
            <Dropdown
              //   value={city}
              className="text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              id="ForTask"
              options={citySelectItems}
              //   onChange={(e) => setCity(e.value)}
              placeholder="Select Employee Supervisor"
            />
            <label htmlFor="ForTask">Select Employee Supervisor</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 p-1">
          <span className="p-float-label">
            <Dropdown
              //   value={city}
              className="text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              id="Designation"
              options={citySelectItems}
              //   onChange={(e) => setCity(e.value)}
              placeholder="Select  Designation"
            />
            <label htmlFor="Designation">Designation</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 p-1">
          <span className="p-float-label">
            <Dropdown
              //   value={city}
              className="text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              id="Department"
              options={citySelectItems}
              //   onChange={(e) => setCity(e.value)}
              placeholder="Select Employee Supervisor"
            />
            <label htmlFor="Department">Select Department</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 p-1">
          <span className="p-float-label">
            <InputText
              id="Designation"
              //   value={value2}
              //   onChange={(e) => setValue2(e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
            <label htmlFor="Designation">Employee Code</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 p-1">
          <span className="p-float-label">
            <InputText
              id="Mobile"
              //   value={value2}
              //   onChange={(e) => setValue2(e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
            <label htmlFor="Mobile">Employee Mobile Number</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 p-1">
          <span className="p-float-label">
            <Dropdown
              //   value={city}
              className="text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              id="Role"
              options={citySelectItems}
              //   onChange={(e) => setCity(e.value)}
              placeholder="Select Role"
            />
            <label htmlFor="Role">Designation</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 p-1">
          <span className="p-float-label">
            <Dropdown
              //   value={city}
              className="text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              id="Gender"
              options={citySelectItems}
              //   onChange={(e) => setCity(e.value)}
              placeholder="Select Gender"
            />
            <label htmlFor="Gender">Gender</label>
          </span>
        </div>
        <div className="col-12">
          <ProfileFileUpload setData={setData} />
        </div>
      </div>
      <Button label="Submit" icon="pi pi-check" />
    </Card>
  );
};

export default AddEmployeeForm;
