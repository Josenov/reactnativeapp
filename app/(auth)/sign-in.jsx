import { View, ScrollView, Image, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import {useGlobalContext} from '../../context/GlobalProvider'




const SignIn = () => {

  const {setUser, setIsLogged} = useGlobalContext();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  const submit = async () => {

    if (!form.email === '' || !form.password === '') {
      Alert.alert('Error', 'Please fill all the fields')
    }

    setIsSubmitting(true)

    try {
      await signIn(form.email, form.password)

      const result = await getCurrentUser();

      setUser(result);
      setIsLogged(true);

      Alert.alert('Success', 'User logged in succesfully!')

      router.replace('/home')

    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }


  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[90vh] px-4 my-6'>
          <Image

            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'

          />
          <Text className='text-2xl text-semibold mt-10 font-psemibold  text-white'>Log In To Aora</Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboarType='email-adress'

          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'


          />
          <CustomButton
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}

          />
          <View className='justify-center items-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-200 font-pregular'>
              Don't have an account?
            </Text>
            <Link className='text-lg font-semibold text-secondary' href={'/sign-up'}>Sign Up</Link>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn