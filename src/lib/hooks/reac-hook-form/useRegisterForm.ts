import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export interface RegisterFields {
  FName: string
  LName: string
  Email: string
  Password: string
}

export const useRegisterForm = () => {
  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Please enter a valid email!')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be more than 6 letters')
      .required('Password is required')
  })

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(RegisterSchema)
  })

  return { handleSubmit, errors, register, reset }
}

export type RegisterForm = ReturnType<typeof useRegisterForm>
