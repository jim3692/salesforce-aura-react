/* eslint-disable-next-line no-unused-expressions */
({
  goToNextImage: function (cmp) {
    const currentImageIdx = cmp.get('v.currentImageIdx')
    this.setImage(cmp, currentImageIdx + 1)
  },
  goToPreviousImage: function (cmp) {
    const currentImageIdx = cmp.get('v.currentImageIdx')
    this.setImage(cmp, currentImageIdx - 1)
  },
  setImage: function (cmp, idx) {
    const images = cmp.get('v.images')
    cmp.set('v.currentImageIdx', idx)
    cmp.set('v.currentImage', images.at(idx % images.length))
  }
})
