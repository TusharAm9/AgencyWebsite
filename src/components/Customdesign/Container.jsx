// Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        max-w-4xl mx-auto px-4 md:px-8 py-10 ${className}`}
      style={
        {
          // Optional: add minHeight if you want true vertical centering
          // minHeight: "70vh", // uncomment to center vertically (adjust as needed)
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }
      }
    >
      {children}
    </div>
  );
}
