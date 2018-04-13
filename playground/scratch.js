let cat = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
    imageDescription: "Grey siamese cat with bright green eyes, looking up to the camera.",
    name: "Tina",
    sex: "female",
    age: 3,
    breed: "Siamese",
    story: "Abandoned by previous owner."
  },
  {
    imageURL: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
    imageDescription: "Grey siamese cat with bright green eyes, looking up to the camera.",
    name: "Tina",
    sex: "female",
    age: 3,
    breed: "Siamese",
    story: "Abandoned by previous owner."
  },
  {
    imageURL: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
    imageDescription: "Grey siamese cat with bright green eyes, looking up to the camera.",
    name: "Tina",
    sex: "female",
    age: 3,
    breed: "Siamese",
    story: "Abandoned by previous owner."
  }
];

let dog = [{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
}];

// console.log(cat[0]);
// console.log(dog[0]);

const L = cat.length;
console.log(L, cat.splice(1));
// console.log(L, dog.splice(1));
