import Sidebar from "../Sidebar";

function AANML(){
  const links = [
    { text: "Machine Learning", to: "/people" },
    { text: "About us", to: "/about" },
  ];

  return (
    <>
      <Sidebar links={links} />

    </>
  );
}

export default AANML;