import { Link } from "react-router-dom";

export const pets = [
    {
      id: 1,
      name: "Ally",
      image: "https://i.ibb.co/88qydfc/lilu.jpg",
      age: 2,
    },
    {
      id: 2,
      name: "Molly",
      image: "https://i.ibb.co/PcWmskm/molly.jpg",
      age: 1,
    },
    {
      id: 3,
      name: "Mayumi",
      image: "https://i.ibb.co/3pvs9XR/mayumi2.jpg",
      age: 7,
    },
    {
      id: 4,
      name: "Himeko",
      image: "https://i.ibb.co/kMfJ9Dn/himeko.jpg",
      age: 4,
    },
    {
      id: 5,
      name: "Sirius",
      image: "https://i.ibb.co/PT5Bywj/sirius.jpg",
      age: 1,
    },
    {
      id: 6,
      name: "Askan",
      image: "https://i.ibb.co/QK5tW2z/askan.jpg",
      age: 6,
    },
    {
      id: 7,
      name: "Negrito",
      image: "https://i.ibb.co/C8fjGfs/negrito.jpg",
      age: 1,
    },
  ];


const Pets = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Pets</h2>
        {pets.map((e) => (
          <p key={e.id}>
            <Link to={`${e.id}`}>{e.name}</Link>
          </p>
        ))}
      </div>
    </>
  );
};
export default Pets;