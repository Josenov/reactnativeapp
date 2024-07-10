import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../components/FormField'
import { Video, ResizeMode } from 'expo-av'
import { icons } from '../../constants'
import CustomButton from '../../components/CustomButton'

const Create = () => {

  const submit =()=>{

  }

  const [uploading, setUploading] = useState(false)

  const [form, setForm] = useState({
    title: '',
    video: null,
    thumbnail: null,
    prompt: ''
  })
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='px-4 my-12'>
        <Text className='text-white text-2xl font-psemibold'>Upload Videos</Text>
        <FormField
          title='Videos Title'
          value={form.title}
          placeholder='Give your video a catch title...'
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles='mt-10'

        />

        <View className='mt-7 space-y-2'>
          <Text className='text-base text-gray-100 font-pmedium'>Upload Video</Text>
          <TouchableOpacity>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
              />
            ) : (<View className='w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center'>
              <View className='items-center justify-center border border-dashed border-secondary w-14 h-14'>
                <Image
                  source={icons.upload}
                  resizeMode='contain'
                  className='w-8 h-8'

                />
              </View>
            </View>)}
          </TouchableOpacity>

        </View>

        <View className='mt-7 space-y-2'>
          <Text className='text-base text-gray-100 font-pmedium'>Thumbnail Image</Text>
          <TouchableOpacity>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode='cover'
                className='w-full h-64 rounded-2xl'
              />
            ) : (<View className='w-full h-16 px-4 bg-black-100 border-2 border-black-200 flex-row  space-x-2 rounded-2xl justify-center items-center'>
              
                <Image
                  source={icons.upload}
                  resizeMode='contain'
                  className='w-5 h-5'

                />
                <Text className='text-sm text-gray-200 font-pmedium'> Choose a file</Text>
              
            </View>)}
          </TouchableOpacity>
        </View>

        <FormField
          title='AI Prompt'
          value={form.prompt}
          placeholder='The prompt you used to create this video'
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles='mt-10'

        />

        <CustomButton
          title='Submit & Publish'
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={uploading}
        
        />



        
      </ScrollView>
    </SafeAreaView>
  )

}

export default Create