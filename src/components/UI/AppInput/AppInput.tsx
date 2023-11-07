import { StyledInput } from "./AppInput.style"

interface IAppButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export const AppInput = ({type, placeholder}: IAppButtonProps) => {
    return (
        <StyledInput type={type} placeholder={placeholder} />
    )
}