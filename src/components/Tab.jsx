const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-7 py-2 text-lg font-medium rounded-lg ${
        isActive ? "bg-[#E7FE29]" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
