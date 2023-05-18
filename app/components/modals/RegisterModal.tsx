'use client'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from '../common/Modal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Input from '../common/Input'
import Button from '../common/Button'
import { useSupabase } from '@/app/providers/SupabaseProvider'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const RegisterModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

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
      confirmPassword: '',
    },
  })

  const toggleAuth = () => {
    if (loginModal.isOpen) {
      loginModal.onClose()
      registerModal.onOpen()
    } else if (registerModal.isOpen) {
      registerModal.onClose()
      loginModal.onOpen()
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (value) => {
    try {
      if (value.password !== value.confirmPassword) {
        toast.error('Passwords do not match')
        return 
      }
      const {data, error} = await supabase.auth.signUp({
        email: value.email,
        password: value.password,
      })
      if (error) {
        toast.error(error.message)
        throw error
      }
      if (data.session) {
        toast.success('Sign Up successfully')
        router.push('/dashboard')
      }
      registerModal.onClose()
    } catch (e) {
      console.error(e, 'SIGN_UP_ERROR')
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
        errors={errors}
        register={register}
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        errors={errors}
        register={register}
      />
      <Button type="submit" varient="primary">
        Sign Up
      </Button>
    </form>
  )

  const footerContent = (
    <div className="flex items-center justify-center">
      <div className="text-gray-500">
        Have an account?{' '}
        <span
          className="cursor-pointer text-sky-900 hover:underline"
          onClick={toggleAuth}
        >
          Sign In
        </span>
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      title="Sign Up"
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
