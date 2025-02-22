
// Search bar
const product = [
    {
        id: 1,
        image: 'src/img/buku.webp',
        title: 'Bahan Ajar',
        grade: 'Kelas 8 SMP',
        chapter: 'Tema 02',
        type:'Flip Book & E-Book',
        description: 'Berisi tentang informasi materi secara menyeluruh',
        link: 'bahan-ajar.html',
    },
    {
        id: 2,
        image: 'src/img/guru.webp',
        title: 'Video',
        grade: 'Kelas 8 SMP',
        chapter: 'Tema 02',
        type: 'Video',
        description: 'Berisi tentang penjelasan materi dalam bentuk video',
        link: 'https://drive.google.com/file/d/1g0m0XAUKRRy9YhdSwws7cXQQl0QLjvz9/view?usp=drive_link',
    },
]

const categories = [...new Set(product.map((item)=> {return item}))]

document.getElementById('SearchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('root').innerHTML = items.map((item)=>{
        var {image, title, grade, chapter, description, type, link} = item;
        return(
            `<div class="bg-white p-4 rounded-md shadow-lg cursor-pointer hover:-translate-y-2 duration-300 space-y-5">
                    <a href='${link}'>
                        <div class="font-Josefin">
                            <img class="w-full h-32 object-cover mb-4 rounded-md" height="100" width="100" src="${image}" alt="Materi berbasis buku">
                            <h3 class="text-xl font-bold mb-2">${title}</h3>
                            <p class="text-gray-600 mb-2">${grade} | ${chapter} | ${type} </p>
                        </div>
                    <p class="text-gray-700">${description}</p>
                    </a>
                </div>`
        )
    }).join('')
}
displayItem(categories);
