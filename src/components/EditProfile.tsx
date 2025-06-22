import { useForm } from "react-hook-form";
import { EditProfileForm, type FieldsType } from "./EditProfileForm";
import { useSelector } from "react-redux";
import type { CustomAxiosError, StoreType } from "../utils/types";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useSnackbar } from "../context/snackbar";

export const EditProfile = () => {
  const { showSnackbar } = useSnackbar();
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      photoUrl: "",
      lastName: "",
      gender: "",
      age: "",
      about: "",
    },
  });

  const editProfile = async (data: FieldsType) => {
    try {
      await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          ...data,
        },
        {
          withCredentials: true,
        }
      );
      showSnackbar("Edit profile successfully", "Success");
    } catch (e: unknown) {
      const err = e as CustomAxiosError;
      showSnackbar(err.message, "Error");
    }
  };

  const onSubmit = (data: FieldsType) => {
    editProfile(data);
  };
  const user = useSelector((state: StoreType) => state.user);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        textAlign: "center",
        display: "flex",
        gap: "62px",
      }}
    >
      <div style={{ width: "100%" }}>
        <EditProfileForm
          control={control}
          errors={errors}
          setValue={setValue}
        />

        <button
          type="submit"
          style={{
            borderRadius: "1920px",
            color: "white",
            margin: "32px auto",
            padding: "8px 32px",
            backgroundColor: "green",
          }}
        >
          Submit
        </button>
      </div>
      <div
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "16px",
          padding: "16px",
          display: "flex",
          maxWidth: "500px",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "rgb(222 229 228)",
          boxShadow: "10px 10px 20px white",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img
            src={user?.photoUrl}
            style={{ width: "300px", height: "300px", borderRadius: "8px" }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {user?.firstName + " " + user?.lastName}
            </div>
            {user?.gender && (
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {user?.gender}
              </div>
            )}
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {user?.about}
          </div>
        </div>
      </div>
    </form>
  );
};
