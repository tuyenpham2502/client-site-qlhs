import { Inter } from 'next/font/google'
import { Link } from '@chakra-ui/next-js'
import { AspectRatio, Button } from '@chakra-ui/react'
import MainLayout from 'src/components/layout/MainLayout'
import FilipingUI from 'src/components/loading/Filiping'
import { useState } from 'react'
import { NextSeo } from 'next-seo'
const inter = Inter({ subsets: ['latin'] })

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
      <Button colorScheme='blue' onClick={onChange}>Button</Button>
      <FilipingUI isLoading={isLoading} />

      {/* <AspectRatio maxW='500' ratio={1}>
        <video controls>
          <source src='https://api.tuyenpham.site/FileStorage/GetFile/9818c440-6e76-4b4e-8ac9-d01ae883f117_484266.mp4' type='video/mp4' />
        </video>
      </AspectRatio>
      <AspectRatio maxW='500' ratio={1}>
        <video controls>
          <source src='https://api.tuyenpham.site/FileStorage/GetFile/9818c440-6e76-4b4e-8ac9-d01ae883f117_484266.mp4' type='video/mp4' />
        </video>
      </AspectRatio>
      <AspectRatio maxW='500' ratio={1}>
        <video controls>
          <source src='https://api.tuyenpham.site/FileStorage/GetFile/9818c440-6e76-4b4e-8ac9-d01ae883f117_484266.mp4' type='video/mp4' />
        </video>
      </AspectRatio>

      <img src="https://api.tuyenpham.site/FileStorage/GetFile/9818c440-6e76-4b4e-8ac9-d01ae883f117_840948.png" alt="naruto" /> */}
    </MainLayout>
  )

}
