import backgroundImg1 from '@/assets/images/bg-1.jpg'
import backgroundImg2 from '@/assets/images/bg-2.jpg'
import backgroundImg3 from '@/assets/images/bg-3.jpg'
import backgroundImg4 from '@/assets/images/bg-5.jpg'

export default [
    {
        key: "menu.today",
        icon: "mdi-trophy",
        text: "Image of the day",
        description: 'Display selected image of the day and last ten images of the day',
        image: backgroundImg1,
        routeName: 'today'
    },
    {
        key: "menu.toppicks",
        icon: "mdi-star",
        text: "Top-picks",
        description: '',
        image: backgroundImg2,
        routeName: 'toppicks'
    },
    {
        key: "menu.images",
        icon: "mdi-image-multiple",
        text: "Images",
        description: 'Search images',
        image: backgroundImg3,
        routeName: 'images'
    },
    {
        key: "menu.user",
        icon: "mdi-account",
        text: "User",
        description: 'Display images of specific user',
        image: backgroundImg4,
        routeName: 'user'
    }
]