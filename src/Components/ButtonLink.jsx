/* eslint-disable react/prop-types */
const ButtonLink = (props) => {
  return (
    <>
    <a href={props.tujuan}>
        <button className="flex flex-col items-center justify-between px-3 py-2 text-center text-xl font-bold text-black rounded-xl w-32 h-32 m-auto hover:shadow-lg">
            <img src={props.logo} alt="logo" className="w-20" />
            <span className="">
                {props.nama}
            </span>
            {/* <img src="/src/assets/right-arrow_271228.png" alt="arrow" className="w-4"/> */}
        </button>
    </a>
    </>
  );
};

export default ButtonLink;
