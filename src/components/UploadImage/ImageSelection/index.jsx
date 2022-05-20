import React, { useState, useContext, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import image from '../../../assets/images/image.svg'
import { BsCloudUpload } from 'react-icons/bs'

import { Wrapper, Header, Bottom, DropZone, ImagePreview } from './styles'
import { useImageUploadContext } from '../../../context/ImageUploadContext'

function ImageSelection() {
  const { file, setFile, filePreview, setFilePreview, uploadToServer } =
    useImageUploadContext()

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      console.log('rejectedFiles', rejectedFiles)
      return
    }
    setFile(acceptedFiles[0])
    setFilePreview(URL.createObjectURL(acceptedFiles[0]))
  }, [])

  const { getRootProps, open, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
  })

  return (
    <Wrapper>
      <Header>
        <h1>Upload your image</h1>
        <p>File Should be Jpeg, Png,...</p>
      </Header>
      <DropZone {...getRootProps()}>
        <img src={image} alt="Upload Image" />
        {isDragActive ? (
          <span>Drop the files here ...</span>
        ) : (
          <span>Drag & Drop your image here</span>
        )}
        <ImagePreview src={filePreview} />
      </DropZone>
      <Bottom>
        <p>Or</p>
        <button onClick={open}>{file ? 'Change file' : 'Choose a file'}</button>
        {file && (
          <button onClick={uploadToServer} className="upload-btn">
            <BsCloudUpload fontSize="1rem" /> <span>Upload to server</span>
          </button>
        )}
      </Bottom>
    </Wrapper>
  )
}

export default ImageSelection
