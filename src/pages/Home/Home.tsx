/* eslint-disable tailwindcss/no-custom-classname */
import { Avatar, Button, Spinner } from 'components/shared/shared'
import { FC } from 'react'

interface Props {}

const Home: FC<Props> = (props: Props) => {
  return (
    <div className="home">
      <Avatar size="small" />
      <Button>Button</Button>
      <Spinner />
    </div>
  )
}

export default Home
