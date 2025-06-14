import axios from "axios";
import { useForm } from "react-hook-form";

type LoginData = {
  emailId: string;
  password: string;
};
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginData>({
    mode: "onChange",
  });
  const onSubmit = async (data: LoginData) => {
    console.log("Login Data:", data);
    try {
      const res = axios.post("http://localhost:3000/login", data, {
        withCredentials: true,
      });

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                {...register("emailId", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.emailId && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.emailId.message}
                </p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "min length should be 6",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </fieldset>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
