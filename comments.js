let boxMessage = document.querySelector(".message")
let commentArea = document.querySelector(".comment-area")
let btnSend = document.querySelector(".comment-send")

function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || []

    comments.forEach(comment => {
        let newMessage = document.createElement("p")
        newMessage.textContent = comment
        boxMessage.appendChild(newMessage)
    })
}

document.addEventListener("DOMContentLoaded", loadComments)

btnSend.addEventListener('click', function() {
    let commentAreaValue = commentArea.value.trim()

    if (commentAreaValue !== "") {
        let comments = JSON.parse(localStorage.getItem("comments")) || []
        
        comments.push(commentAreaValue)
        
        localStorage.setItem("comments", JSON.stringify(comments))
        
        let newMessage = document.createElement("p")
        newMessage.textContent = commentAreaValue
        boxMessage.appendChild(newMessage)
        
        commentArea.value = ""
    }
})

/* function deleteComment(){
    let deleteCom = localStorage.removeItem("comments")
    return deleteCom
}

deleteComment() */