'use client'

import useLoginModal from '@/app/hooks/useLoginModal'
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'

const LoginModal = () => {
  const loginModal = useLoginModal()

  const bodyContent = (
    <form className='flex flex-col gap-4'>
      <Input id="email" label="Email" type='email' />
      <Input id="password" label="Password" type='password' />
    </form>
  )

  const footerContent = (
    <div className='space-y-4'>
      <Button type='submit' varient='primary'>Login</Button>
      <Button>Cancel</Button>
    </div>
  )

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      title="Login"
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
