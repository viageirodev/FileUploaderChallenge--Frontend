import React from 'react'
import { useImageUploadContext } from '../context/ImageUploadContext'

import ImageSelection from '../components/UploadImage/ImageSelection'
import UploadLoader from '../components/UploadImage/UploadLoader'
import UploadSucess from '../components/UploadImage/UploadSuccess'

function UploadImagePage() {
  const { uploading, uploaded } = useImageUploadContext()

  if (uploading) {
    return <UploadLoader />
  }

  if (uploaded) {
    return <UploadSucess />
  }

  return <ImageSelection />
}

export default UploadImagePage
