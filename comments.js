let commentContainer = document.getElementById("commentContainer")
let commentArea = document.querySelector(".comment-area")
let btnSend = document.querySelector(".comment-send")
let messageLoader = document.querySelector(".message-loader")
let inputName = document.querySelector(".comment__input-name")
let errorText = document.createElement("h1")
let lengthArray = 3

function loadComments() {
    let commentsName = JSON.parse(localStorage.getItem("commentsName")) || []
    let comments = JSON.parse(localStorage.getItem("comments")) || []

    if (commentsName.length !== comments.length) {
        console.error("Масиви імен та коментарів не збігаються за розміром!")
        return
    }

    if (comments.length > 0) {
        commentContainer.style.display = "block"
    }

    commentsName.forEach((name, index) => {
        let commentBlock = document.createElement("div")
        commentBlock.classList.add("comment-block")

        let userName = document.createElement("p")
        userName.classList.add("title__comments-load")
        userName.textContent = name + ":"

        let newMessage = document.createElement("p")
        newMessage.classList.add("text__comments-load")
        newMessage.textContent = comments[index]

        commentBlock.appendChild(userName)
        commentBlock.appendChild(newMessage)

        commentContainer.appendChild(commentBlock)
    })
}

document.addEventListener("DOMContentLoaded", loadComments)

btnSend.addEventListener("click", function () {
    errorText.textContent = ""
    let commentAreaValue = commentArea.value.trim()
    let inputNameValue = inputName.value.trim()

    if (commentAreaValue !== "" && inputNameValue !== "") {
        let comments = JSON.parse(localStorage.getItem("comments")) || []
        let commentsName = JSON.parse(localStorage.getItem("commentsName")) || []

        comments.push(commentAreaValue)
        commentsName.push(inputNameValue)

        localStorage.setItem("comments", JSON.stringify(comments))
        localStorage.setItem("commentsName", JSON.stringify(commentsName))

        messageLoader.classList.add("visible__message-loader")

        setTimeout(function () {
            messageLoader.classList.remove("visible__message-loader")

            let commentBlock = document.createElement("div")
            commentBlock.classList.add("comment-block")

            let userName = document.createElement("p")
            userName.classList.add("title__comments-load")
            userName.textContent = inputNameValue + ":"

            let newMessage = document.createElement("p")
            newMessage.classList.add("text__comments-load")
            newMessage.textContent = commentAreaValue

            commentBlock.appendChild(userName)
            commentBlock.appendChild(newMessage)

            commentContainer.appendChild(commentBlock)

            if (comments.length === 1) {
                commentContainer.style.display = "block"
            }

            commentArea.value = ""
            inputName.value = ""
        }, 900)
    } else {
        errorText.textContent = "You have to write your name and message!"
        commentContainer.append(errorText)
        errorText.classList.add("message__error-text")
    }
})



let currentIndex = 0
function randomCom(){
    return Math.floor(Math.random() * (25 - 10 + 1) + 10) * 500
}
window.addEventListener("load", function(){
    setTimeout(function(){
        let names = ["Ryan", "Chris", "Maria", "Jose"]
        let comments = ["OK", "Nice site!", "It's pretty weather today!", "Good!"]

let commentContainer = document.getElementById("commentContainer")
let availableNames = [...names]
let availableComments = [...comments]

function addRandomComment() {
    if (availableNames.length > 0 && availableComments.length > 0) {
        let randomNameIndex = Math.floor(Math.random() * availableNames.length)
        let name = availableNames[randomNameIndex]

        let randomCommentIndex = Math.floor(Math.random() * availableComments.length)
        let comment = availableComments[randomCommentIndex]

        let commentBlock = document.createElement("div")
        commentBlock.classList.add("comment-block")

        let userName = document.createElement("p")
        userName.classList.add("title__comments-load")
        userName.textContent = name + ":"

        let newMessage = document.createElement("p")
        newMessage.classList.add("text__comments-load")
        newMessage.textContent = comment

        commentBlock.appendChild(userName)
        commentBlock.appendChild(newMessage)

        if (commentContainer.childElementCount === 0) {
            commentContainer.style.display = "block"
        }

        commentContainer.appendChild(commentBlock)

        availableNames.splice(randomNameIndex, 1)
        availableComments.splice(randomCommentIndex, 1)

        let randomTime = Math.floor(Math.random() * 9000) + 7000
        setTimeout(addRandomComment, randomTime)
    }
}


addRandomComment()    
    }, randomCom())
})



/* function deleteComment(){
    let deleteCom = localStorage.removeItem("comments")
    return deleteCom
}

deleteComment()

function deleteNames(){
    let deleteName = localStorage.removeItem("commentsName")
    return deleteName
}

deleteNames() */