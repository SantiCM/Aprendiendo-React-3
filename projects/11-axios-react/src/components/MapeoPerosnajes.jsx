export const MapeoPerosnajes = ({ data }) => {
  return (
    <li
      key={data}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h4>Nombres: {data.firstName}</h4>
      <h2>Nombre Completo: {data.fullName}</h2>
      <img src={data.imageUrl} width={220} style={{ borderRadius: "15px" }} />
      <h4>Nombres: {data.firstName}</h4>
    </li>
  );
};
