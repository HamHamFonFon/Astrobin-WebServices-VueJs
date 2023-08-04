import backgroundImg1 from '@/assets/images/bg-1.jpg'
import backgroundImg2 from '@/assets/images/bg-2.jpg'
import backgroundImg3 from '@/assets/images/bg-3.jpg'
import backgroundImg4 from '@/assets/images/bg-5.jpg'

export default [
    {
        key: 'home.today',
        icon: 'mdi-trophy',
        image: backgroundImg1,
        text: 'Image of the day',
        description: 'Display selected image of the day and last ten images of the day'
    },
    {
        key: 'home.toppicks',
        icon: 'mdi-star',
        image: backgroundImg2,
        text: "Top-picks",
        description: ''
    },
    {
        key: 'home.images',
        icon: 'mdi-image-multiple',
        image: backgroundImg3,
        text: 'Images',
        description: 'Search images'
    },
    {
        key: 'home.user',
        icon: 'mdi-account',
        image: backgroundImg4,
        text: 'User',
        description: 'Display images of specific user'
    }
]