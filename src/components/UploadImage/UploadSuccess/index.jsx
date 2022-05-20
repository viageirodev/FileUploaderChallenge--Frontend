import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast'

import { useImageUploadContext } from '../../../context/ImageUploadContext'

import { Wrapper, Header, UploadedImageContainer, ImageLink } from './styles'

function UploadSucess() {
  const { setFile, setFilePreview, setUploaded, setUrlOnTheServer } =
    useImageUploadContext()

  function copyLink() {
    navigator.clipboard.writeText(urlOnTheServer).then(() => {
      toast('Link copied to clipboard!', {
        icon: <BsFillCheckCircleFill color="#219653" />,
      })
    })
  }

  function startAgain() {
    setFile(null)
    setFilePreview(null)
    setUploaded(false)
    setUrlOnTheServer(null)
  }

  const { urlOnTheServer } = useImageUploadContext()
  return (
    <Wrapper>
      <Toaster />
      <Header>
        <BsFillCheckCircleFill color="#219653" fontSize="2rem" />
        <h1>Upload Successfully!</h1>
      </Header>
      <UploadedImageContainer>
        <img src={urlOnTheServer} alt="uploaded image" />
      </UploadedImageContainer>
      <ImageLink>
        <span>{urlOnTheServer.substring(0, 32).concat('...')}</span>
        <button onClick={copyLink}>Copy Link</button>
      </ImageLink>
      <button onClick={startAgain}>Upload More</button>
    </Wrapper>
  )
}

export default UploadSucess
