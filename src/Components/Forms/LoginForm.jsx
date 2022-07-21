import React from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import "../../Styles/LoginForm.css";

const LoginForm = () => {
  return (
    <div className="LoginMain flex align-items-center justify-content-center">
      <div className="border-round w-full lg:w-8">
        <div className="text-center mb-5">
          <img
            src="assets/images/blocks/logos/hyper.svg"
            alt="hyper"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">Welcome </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText id="email" type="text" className="w-full mb-4" />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText id="password" type="password" className="w-full mb-4" />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <Checkbox
                id="rememberme"
                // onChange={(e) => setChecked(e.checked)}
                // checked={checked}
                className="mr-2"
              />
              <label htmlFor="rememberme">Remember me</label>
            </div>
          </div>

          <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
