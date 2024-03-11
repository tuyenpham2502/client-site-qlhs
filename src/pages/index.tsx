import { Inter } from 'next/font/google'
import { Button } from '@chakra-ui/react'
import MainLayout from 'src/components/layout/MainLayout'
import { useState } from 'react'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
const FilipingUI = dynamic(()=> import('src/components/loading/Filiping'));

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onChange = () => {
    setIsLoading(!isLoading)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  }

  return (
    <MainLayout>
      <NextSeo title='TuyenPham films-Movies & TV shows' />
      
    </MainLayout>
  )

}
