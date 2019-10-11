// export default function (state = [
//     'images/1.png',
//     'images/2.png',
//     'images/3.jpeg',
//     'images/4.jpeg'
// ], action) {
//     switch (action.type) {
//         case 'PAGE_SELECTED':
//             return action.payload.carouselImages;
//     }
//     return state;
// }

export default function() {
    return [
        '/images/carousel/2.jpg',
        '/images/carousel/8.jpg',
        '/images/carousel/11.jpg',
        '/images/carousel/4.jpeg',
        '/images/carousel/3.jpeg',
    ]
}