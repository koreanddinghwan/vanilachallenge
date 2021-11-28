const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];
//images 변수에 어레이의 형태로 사진들의 파일명 저장.//나중에 자동으로 불러오게끔하는 것도 좋을 듯 싶다.


//랜덤
const chosenImage = images[Math.floor(Math.random() * images.length)]; //qoutes와 동일.

//경로생성
bgimageroot = `Img/${chosenImage}` //태그요소객체의 src프로퍼티에 이미지의 주소를 추가한다.


//content객체에 background이미지 배정
const content = document.querySelector('body')

content.style.backgroundImage = "url(" + bgimageroot + ")";

// gs://fir-test-88ccc.appspot.com/img/1.jpg
// https://firebasestorage.googleapis.com/v0/b/fir-test-88ccc.appspot.com/o/img%2F3.jpg?alt=media&token=90b900d6-b3f5-451b-b343-e69c3eee1e6b
// https://firebasestorage.googleapis.com/v0/b/fir-test-88ccc.appspot.com/o/img%2F1.jpg?alt=media&token=533d7ae6-ea21-45b4-9e98-e0223a19f959
// https://firebasestorage.googleapis.com/v0/b/fir-test-88ccc.appspot.com/o/img%2F2.jpg?alt=media&token=d88275e3-73a7-4228-8a9f-1f3fda855f32
