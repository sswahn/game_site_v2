
/** check image size */
const checkImageSize = event => {
  let img = new Image()
  img.src = window.URL.createObjectURL(event.target.files[0])
  img.onload = () => {
    if (img.width === 100 && img.height === 100) {
      alert(`Nice, image is the right size. It can be uploaded`)
      // upload logic here
    } else {
      alert(`Sorry, this image doesn't look like the size we wanted. It's 
      ${img.width} x ${img.height} but we require 100 x 100 size image.`)
    }                
  }
}

/** capitalize all words in string (to use on Tags, etc. for filter matching) */
'your string'.replace(/\b\w/g, l => l.toUpperCase())