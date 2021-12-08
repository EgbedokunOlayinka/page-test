interface IButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return (
    <button className='custom-btn'>
      { children }
    </button>
  )
}

export default Button
