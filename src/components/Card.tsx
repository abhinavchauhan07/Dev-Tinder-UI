type CardProps = {
  photoUrl: string;
  about?: string;
  firstName: string;
  lastName: string;
  gender?: string;
};
export const Card = ({
  firstName,
  lastName,
  photoUrl,
  about,
  gender,
}: CardProps) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "300px",
        height: "400px",
        borderRadius: "16px",
        flex: "1 1 300px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "rgb(222 229 228)",
        boxShadow: "10px 10px 20px white",
      }}
    >
      <img src={photoUrl} style={{ width: "100%", borderRadius: "8px" }}></img>
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
            {firstName + " " + lastName}
          </div>
          {gender && (
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              {gender}
            </div>
          )}
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {about}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <button
          style={{
            borderRadius: "1920px",
            height: "40px",
            color: "#fff",
            width: "100%",
            cursor: "pointer",
            backgroundColor: "red",
          }}
        >
          Reject
        </button>
        <button
          style={{
            borderRadius: "1920px",
            height: "40px",
            color: "#fff",
            width: "100%",
            cursor: "pointer",
            backgroundColor: "green",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
