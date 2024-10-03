"use client"
import { SelectStyle } from "./Select-style";
interface SelectProps {
    onChange?: (even:React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
  }
  
  const Select: React.FC<SelectProps> = ({ onChange, children }) => {
    return (
      <SelectStyle
        onChange={onChange}
      >
        {children}
      </SelectStyle>
    );
  };
  
  export default Select;