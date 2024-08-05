export const Card = ({ info }: any) => {
  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 border border-gray-400 rounded-lg">
      <img className="w-[150px] rounded-full" src={info.image} alt="" />

      <h2 className="text-xl font-semibold my-4">{info.name}</h2>
      <p className="w-full">{info.species}</p>
      <p className="w-full">{info.origin.name}</p>
    </div>
  );
};
