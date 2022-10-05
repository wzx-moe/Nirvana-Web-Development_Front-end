import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import Cropper from 'react-cropper' // 引入Cropper
import 'cropperjs/dist/cropper.css' // 引入Cropper对应的css

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/HooksCropperModal.css'


function HooksCropperModal({ uploadedImageFile, onClose, onSubmit }) {
  const [src, setSrc] = useState(null)

  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();

  useEffect(() => {
    const fileReader = new FileReader()
    fileReader.onload = e => {
      const dataURL = e.target.result
      setSrc(dataURL)
    }

    fileReader.readAsDataURL(uploadedImageFile)
  }, [uploadedImageFile])

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toBlob());
    }
  };

  const handleCut = () => {
    setCropData(cropper.getCroppedCanvas().toDataURL());
    
  }
  const handleSubmit = useCallback(() => {
      //把选中裁切好的的图片传出去
      // if (cropper !== "undefined") {
      cropper.getCroppedCanvas().toBlob(blob=>{
        onSubmit(blob);
      })

      // 关闭弹窗
      onClose();
    // })
  }, [onClose, onSubmit,cropData,cropper])

  return (
    <div className="hooks-cropper-modal">
      <div className="modal-panel">
        <div className="cropper-container-container">
          <div className="cropper-container">
            <Cropper
              className="cropper"
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".cropper-preview"
              src={src}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              onInitialized={(instance) => {
                setCropper(instance);
              }}
              guides={true}
            />
          </div>
          <div className="preview-container">
            <div className="cropper-preview" />
          </div>
          <div className="crop-container">
            <img className="crop-submitpreview" src={cropData} alt ="cropped"/>
          </div>
        </div>
        <div className="button-row">
          <button className="btn btn-sm btn-outline-secondary col-4" onClick={handleCut}>
            Cut
          </button>
          <button className="btn btn-sm btn-outline-danger col-4" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

HooksCropperModal.propTypes = {
  uploadedImageFile: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default HooksCropperModal
