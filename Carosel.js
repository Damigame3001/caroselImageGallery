let image = document.getElementById('image')

let imageArr = ['https://buffer.com/library/content/images/2023/10/free-images.jpg', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoh-LHoHAHDpeMpLeQEkCzqnG7B_5L7_AQs3WQSv3dXg&s']
// images may be added in here

let count = 0
image.src = imageArr[count]

function moveForward() {
    if (count == (imageArr.length - 1)) {
        count = 0
        image.src = imageArr[count]
    } else {
        count++
        image.src = imageArr[count]
    }
}

function moveBackward() {
    if (count == 0) {
        count = imageArr.length - 1
        image.src = imageArr[count]
    } else {
        count--
        image.src = imageArr[count]
    }
}