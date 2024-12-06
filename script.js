window,addEventListener("load", function(){
    window.scrollTo(0, 0)
})

let $list = document.querySelectorAll("li")
let navBlock = document.querySelector(".navigation")

function activeLink(){
    $list.forEach(($li) => {
        $li.classList.remove('active')

    })
    this.classList.add('active')
}

$list.forEach(($li) => {
    $li.addEventListener("click", activeLink,)
})

let btnMain = document.querySelector(".btn-search")
let commentSend = document.querySelector(".comment-send")

btnMain.addEventListener("click", function(){
    btnMain.classList.add("animated__btn-search")
    setTimeout(function(){
        btnMain.classList.remove("animated__btn-search")
    },40)
})
commentSend.addEventListener("click", function(){
    commentSend.classList.add("animated__comment-send")
    setTimeout(function(){
        commentSend.classList.remove("animated__comment-send")
    },50)
})