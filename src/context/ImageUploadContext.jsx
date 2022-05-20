import React, { useContext, createContext, useState } from 'react'

const ImageUploadContext = createContext()

export const useImageUploadContext = () => useContext(ImageUploadContext)

function ImageUploadContextProvider({ children }) {
  const [file, setFile] = useState(null)
  const [filePreview, setFilePreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [urlOnTheServer, setUrlOnTheServer] = useState(null)

  const uploadToServer = async () => {
    try {
      setUploading(true)
      const formData = new FormData()
      formData.append('image', file)
      const res = await fetch(
        'https://image-uploader2022.herokuapp.com/api/v1/images',
        {
          method: 'POST',
          body: formData,
        }
      )
      const data = await res.json()
      if (data.status === 'success') {
        setUrlOnTheServer(data.url)
        setUploaded(true)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <ImageUploadContext.Provider
      value={{
        file,
        setFile,
        filePreview,
        setFilePreview,
        uploading,
        setUploading,
        uploaded,
        setUploaded,
        uploadToServer,
        urlOnTheServer,
        setUrlOnTheServer,
      }}
    >
      {children}
    </ImageUploadContext.Provider>
  )
}

export default ImageUploadContextProvider
