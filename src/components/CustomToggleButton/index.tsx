import React from 'react';
import './ToggleSwitch.css'; // Import the provided CSS styles in a separate file

interface ToggleButtonProps {
  isToggled?: boolean;
  onToggle?: (state: boolean, rowId?: string | number) => void;
  rowId?: string | number;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  isToggled = false,
  onToggle,
  rowId,
}) => {
  const [toggled, setToggled] = React.useState(isToggled);

  const handleToggle = () => {
    const newState = !toggled;
    setToggled(newState);

    // Call the external handler with the new state and row ID (if provided)
    onToggle?.(newState, rowId);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={toggled} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
