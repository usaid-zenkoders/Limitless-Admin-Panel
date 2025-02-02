import { FC } from "react";
// import { useFormik } from "formik";
// import { LoginFormSchema } from "@/schemas/auth/login-form.schema";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import Input from "../inputs/input";
import PasswordInput from "../inputs/password-input";
import Button from "../buttons/button";
import { LoginFormSchema } from "../../schemas/auth/login-form.schema";
import { useAdminLoginMutation } from "../../services/auth/login";
import { LoginResponse } from "../../types/auth";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const SignInView: FC = () => {
  const [, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const { mutateAsync } = useAdminLoginMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginFormSchema,
    onSubmit: async (values) => {
      const data = (await mutateAsync({
        ...values,
      })) as LoginResponse;
      if (data.token) {
        setCookie("access_token", data.token, { path: "/" });
        navigate("/users");
      }
    },
  });

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    formik;

  return (
    <div className="flex justify-center rounded-[20px]  bg-white p-10 sm:p-8  w-full max-w-[600px]">
      <div className="flex flex-col gap-y-8 w-full">
        <h3 className="text-text-primary text-[36px] leading-[21px] font-medium py-2  ">
          Log in
        </h3>
        <form className="flex flex-col gap-y-6 w-full" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            className="bg-[#F5F5F5] placeholder:text-[#9C9C9C] text-sm "
          />

          <PasswordInput
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
            className="bg-[#F5F5F5] placeholder:text-[#9C9C9C] text-sm"
          />

          <div className="w-full mb-6 ">
            <Button
              type="submit"
              text="Log in"
              className="w-full justify-center bg-black text-[18px] py-6 rounded-2xl cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInView;
