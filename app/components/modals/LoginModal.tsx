'use client'

import useLoginModal from '@/app/hooks/useLoginModal'
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useSupabase } from '@/app/providers/SupabaseProvider'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import useRegisterModal from '@/app/hooks/useRegisterModal'

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const toggleAuth = () => {
    if (loginModal.isOpen) {
      loginModal.onClose()
      registerModal.onOpen()
    } else if (registerModal.isOpen) {
      registerModal.onClose()
      loginModal.onOpen()
    }
  }

  const { supabase } = useSupabase()

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (value) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: value.email,
        password: value.password,
      })
      if (error) {
        toast.error(error.message)
        throw error
      }
      if (data.session) {
        toast.success('Logged in successfully')
        router.push('/dashboard')
      }
      loginModal.onClose()
    } catch (e) {
      console.error(e, 'SIGN_IN_ERROR')
    }
  }

  const bodyContent = (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        label="Email"
        type="email"
        register={register}
        errors={errors}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        errors={errors}
      />
      <Button type="submit" varient="primary">
        Login
      </Button>
    </form>
  )

  const footerContent = <div className="space-y-4">
    <div className='flex items-center justify-between text-sky-900'>
      <div>Forget Password</div>
      <div className='cursor-pointer hover:underline' onClick={toggleAuth}>Sign Up</div>
    </div>
  </div>

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
