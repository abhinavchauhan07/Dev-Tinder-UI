export type SnackbarProps = {
  onClose: () => void;
  message: string;
  type?: "Error" | "Success";
};

export const Snackbar = ({
  onClose,
  message,
  type = "Success",
}: SnackbarProps) => {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: type == "Success" ? "green" : "red",
        width: "300px",
        right: "0",
        top: "60px",
        margin: "16px",
        borderRadius: "8px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
      }}
    >
      <span style={{ color: "white" }}>{message}</span>
      <span
        style={{ color: "white", cursor: "pointer", fontSize: "16px" }}
        onClick={onClose}
      >
        ×
      </span>
    </div>
  );
};
