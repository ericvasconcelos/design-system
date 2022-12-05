import { useState } from 'react'

import { Button } from 'components/Button'

import { Modal } from '../index.js'

export default {
  title: 'components/Modal',
  component: Modal
}

const Template = args => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button onClick={() => setShow(true)}>Show Modal</Button>
      <Modal show={show} onClose={() => setShow(false)} {...args}>
        Minim aliquip consectetur aliquip tempor exercitation ut elit ut culpa. Labore quis minim
        veniam magna. Est nulla occaecat ullamco proident labore sit dolore eiusmod veniam eiusmod
        adipisicing. Ad pariatur consequat qui quis exercitation. Est quis ex tempor occaecat culpa
        ullamco tempor qui fugiat nostrud irure amet ea sit. Velit sint excepteur duis labore ipsum
        enim nostrud.
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Titulo Maneiro'
}
