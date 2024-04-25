interface ToggleButtonProps {
  active: boolean;
  onClick: () => void;
    children: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ active, onClick, children }) => {
  return (
    <button
      className={`${
        active ? "bg-primary text-white font-light shadow-sm shadow-black" : "bg-white text-black font-light"
      } px-4 py-2 rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
