let slidersArray = document.getElementsByClassName("glide")

for (const slider of slidersArray) {
    new Glide(slider, {
        type: 'carousel',
        startAt: 0,
        perView: 1
      }).mount()
}