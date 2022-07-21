import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";

const citySelectItems = [
  { label: "New York", value: "NY" },
  { label: "Rome", value: "RM" },
  { label: "London", value: "LDN" },
  { label: "Istanbul", value: "IST" },
  { label: "Paris", value: "PRS" },
];

const countries = [
  { name: "Australia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Egypt", code: "EG" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spain", code: "ES" },
  { name: "United States", code: "US" },
];
const AddTaskForm = () => {
  const [selectedCountries, setSelectedCountries] = useState(null);

  const countryTemplate = (option) => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src="images/flag/flag_placeholder.png"
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };
  const selectedCountriesTemplate = (option) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src="images/flag/flag_placeholder.png"
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return "Select Countries";
  };

  const panelFooterTemplate = () => {
    const selectedItems = selectedCountries;
    const length = selectedItems ? selectedItems.length : 0;
    return (
      <div className="py-2 px-3">
        <b>{length}</b> item{length > 1 ? "s" : ""} selected.
      </div>
    );
  };

  return (
    <Card>
      <div class="formgrid grid">
        <div class="field col-12 md:col-6">
          <span className="p-float-label">
            <InputText
              id="TaskName"
              //   value={value2}
              //   onChange={(e) => setValue2(e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
            <label htmlFor="TaskName">TaskName</label>
          </span>
        </div>
        <div class="field col-12 md:col-6">
          <span className="p-float-label">
            <Dropdown
              //   value={city}
              className="text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              id="ForTask"
              options={citySelectItems}
              //   onChange={(e) => setCity(e.value)}
              placeholder="Select a Manager"
            />
            <label htmlFor="ForTask">Task Manager</label>
          </span>
        </div>
        <div class="field col-12 md:col-6">
          <span className="p-float-label">
            <MultiSelect
              value={selectedCountries}
              id="ForEmployees"
              options={countries}
              onChange={(e) => setSelectedCountries(e.value)}
              optionLabel="name"
              placeholder="Select Countries"
              filter
              className="multiselect-custom  text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              itemTemplate={countryTemplate}
              selectedItemTemplate={selectedCountriesTemplate}
              panelFooterTemplate={panelFooterTemplate}
            />
            <label htmlFor="ForEmployees">Employees</label>
          </span>
        </div>
        <div className="field col-12 md:col-3">
          <span className="p-float-label">
            <Calendar
              id="icon"
              placeholder="Select Date from"
              className="text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              // value={date3}
              // onChange={(e) => setDate3(e.value)}
              showIcon
            />
          </span>
        </div>
        <div className="field col-12 md:col-3">
          <span className="p-float-label">
            <Calendar
              placeholder="Select Date to"
              id="icon"
              className="text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              // value={date3}
              // onChange={(e) => setDate3(e.value)}
              showIcon
            />
          </span>
        </div>
        <div class="field col-12">
          <label for="address">Description</label>
          <textarea
            id="address"
            type="text"
            rows="4"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          ></textarea>
        </div>
        <div class="field col-12 md:col-6">
          <span className="p-float-label">
            <MultiSelect
              value={selectedCountries}
              id="Status"
              options={countries}
              onChange={(e) => setSelectedCountries(e.value)}
              optionLabel="name"
              placeholder="Select Status"
              filter
              className="multiselect-custom  text-base text-color surface-overlay  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              itemTemplate={countryTemplate}
              selectedItemTemplate={selectedCountriesTemplate}
              panelFooterTemplate={panelFooterTemplate}
            />
            <label htmlFor="Status">Status</label>
          </span>
        </div>
      </div>
      <Button label="Submit" icon="pi pi-check" />
    </Card>
  );
};

export default AddTaskForm;
