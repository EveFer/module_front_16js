const posts = [
    {
        id=1,
        title: 'Mi titulo',
        description: 'Mi descript'
    },
    {
        id=2,
        title: 'Mi titulo 1',
        description: 'Mi descript'
    },
    {
        id=3,
        title: 'encabezado',
        description: 'Mi descript',
        date: '',
        comments: [{
            nombre: "",
            text: ""
        }]
    }
]


console.log( $('#form-save'))



$('#button-save').click((event) => {
    console.log('Guardando..')
    const title = $('#form-save #title').val()
    const description = $('#form-save #description').val()
    console.log(title)
    console.log(description)
    const post = {title, description}
    posts.push(post)
    console.log('El arreglo de post')
    console.log(posts)

    printPosts(posts)
})

const printPosts = (postArray) => {
    $('#wrapper-posts').empty()
    let accumCard = ''
    postArray.forEach(post => {
        const cardPost = `
        <article>
            <p><strong>Title:</strong> ${post.title} </p>
            <p><strong>Title: </strong> ${post.description}</p>
        </article>
        <hr>
        `
        accumCard += cardPost
    });
    console.log(accumCard)
    $('#wrapper-posts').append(accumCard)
}


printPosts(posts)

const inputSearch = $('#input-search').on('keyup', function (event) {
    const content = $(event.target).val()
    // const content = $('#input-search').val()
    // console.log(content)
    const postsByTitle = posts.filter(post => post.title.toLowerCase().includes(content.toLowerCase()))
    console.log(postsByTitle)
    printPosts(postsByTitle)
})


// borrar
// splice()





