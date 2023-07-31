import classNames from 'classnames'

import styles from './Button.module.css'

export enum ButtonVariant {
  primary = 'primary',
  rounded = 'rounded',
  roundedSecondary = 'roundedSecondary',
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
  onClick = undefined,
  type = ButtonType.button,
  variant = ButtonVariant.primary,
  ...rest
}: ButtonProps) => (
  <button
    className={classNames(styles.button, styles[variant], {
      [className]: className,
    })}
    disabled={isDisabled}
    onClick={onClick}
    type={type}
    {...rest}
  >
    <span className={styles.buttonContent}>{children}</span>
  </button>
)
