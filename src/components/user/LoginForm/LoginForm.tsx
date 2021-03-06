import { FC } from 'react'
import * as API from 'api/Api'
import { useLoginForm } from 'lib/hooks/reac-hook-form/useLoginForm'

import { Button, Input } from 'components/shared/shared'

const LoginForm: FC = () => {
  const { errors, handleSubmit, register, reset } = useLoginForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await API.login({
        email: data.email,
        password: data.password
      })

      console.log('res', res)

      reset()
    } catch (e) {
      console.log(e)
    }
  })

  return (
    <div className="login-form">
      <form className="form" name="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="email"
            register={register}
          />
          {errors.email && (
            <div className="error-message">{errors.email.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="text">Password</label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            register={register}
          />
          {errors.password && (
            <div className="error-message">{errors.password.message}</div>
          )}
        </div>
        <Button className="py-2 px-3 border-2" type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
