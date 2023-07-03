export default class ImageFilters
{
    static TitleIcontains = 'title__icontains';
    static DescriptionIcontains = 'description__icontains';
    static Subjects = 'subjects';
    static User = 'user';
    static StartsWidth = '__startswith';
    static EndsWith = '__endswith';
    static Contains = '__contains';
    static IstartWith = '__istartswith';
    static IendWith = '__iendswith';

    constructor (name) {
        this.name = name;
    }
}