/* eslint-disable-next-line no-unused-expressions */
({
  init: function (cmp, event, helper) {
    const images = [
      '/cats-1.jpg',
      '/cats-2.jpg',
      '/cats-3.jpg',
      '/cats-4.jpg'
    ]

    cmp.set('v.images', images)
    cmp.set('v.currentImageIdx', 0)
    cmp.set('v.currentImage', images[0])
  },
  handleNextClick: function (cmp, event, helper) {
    helper.goToNextImage(cmp)
  },
  handlePreviousClick: function (cmp, event, helper) {
    helper.goToPreviousImage(cmp)
  },
  handleImageClick: function (cmp, event, helper) {
    const idx = event.currentTarget.getAttribute('data-idx')
    helper.setImage(cmp, idx)
  }
})
