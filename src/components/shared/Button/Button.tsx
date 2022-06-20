import { ButtonHTMLAttributes, FC } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ children, onClick, type, ...rest }: Props) => {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
