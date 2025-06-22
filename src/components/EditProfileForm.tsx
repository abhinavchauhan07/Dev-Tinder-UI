import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormSetValue,
} from "react-hook-form";

export type FieldsType = {
  firstName: string;
  photoUrl: string;
  lastName: string;
  gender: string;
  age: string;
  about: string;
};
type EditProfileFormProps = {
  control: Control<FieldsType>;
  errors: FieldErrors<FieldsType>;
  setValue: UseFormSetValue<FieldsType>;
};

export const EditProfileForm = ({ control }: EditProfileFormProps) => {
  const containerStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "8px",
    color: "#333",
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        borderRadius: "16px",
        padding: "32px",
        backgroundColor: "rgb(222 229 228)",
      }}
    >
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            placeholder="Enter First Name"
            style={containerStyle}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            placeholder="Enter Last Name"
            style={containerStyle}
          />
        )}
      ></Controller>

      <Controller
        name="photoUrl"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Photo Url" style={containerStyle} />
        )}
      />
      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Enter Age" style={containerStyle} />
        )}
      />
      <Controller
        name="about"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="About" style={containerStyle} />
        )}
      />
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Enter gender" style={containerStyle} />
        )}
      />
    </div>
  );
};
