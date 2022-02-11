import Link from "next/link";

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="w-12 sm:w-20 transition-colors flex flex-col hover:text-white items-center cursor-pointer group">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
