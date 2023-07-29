import classNames from 'classnames'

import styles from './Button.module.css'

export enum ButtonVariant {
  danger = 'danger',
  default = 'default',
  primary = 'primary',
  rounded = 'rounded',
  secondary = 'secondary',
  unstyled = 'unstyled',
}

export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

interface ButtonProps {
  [props: string]: any
  children: React.ReactNode
  className?: string
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent) => void
  type?: ButtonType
  variant?: ButtonVariant
}

export const Button = ({
  children,
  className = '',
  isDisabled = false,
  onClick,
  type = ButtonType.button,
  variant = ButtonVariant.default,
  ...rest
}: ButtonProps) => (
  <button
    className={classNames(styles.button, styles[variant], {
      [className]: className,
    })}
    disabled={isDisabled}
    onClick={onClick ? onClick : undefined}
    type={type}
    {...rest}
  >
    {children}
  </button>
)
