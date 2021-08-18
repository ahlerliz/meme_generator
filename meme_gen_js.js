window.onload = function(){
    var newMeme = document.getElementById("newMeme");
    var newMemeForm = document.getElementById("newMemeForm");
    var imageTextTop = document.getElementById("imageTextTop")
    var imageTextBottom = document.getElementById("imageTextBottom")

    newMemeForm.addEventListener("submit", function(event){
        event.preventDefault()

        var removeButton = document.createElement("button")
        removeButton.innerText = "remove";

        var pictureLinkWords = document.createElement("img")
        pictureLinkWords.src = document.getElementById("pictureLink").value

        var topTextWords = document.createElement("div")
        topTextWords.innerText = document.getElementById("topText").value

        var bottomTextWords = document.createElement("div")
        bottomTextWords.innerText = document.getElementById("bottomText").value

        newMeme.appendChild(pictureLinkWords);
        imageTextTop.appendChild(topTextWords);
        imageTextBottom.appendChild(bottomTextWords);
        newMeme.appendChild(removeButton);
        newMemeForm.reset()
    })

    newMeme.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === 'button') {
            event.target.parentNode.remove();
        }
    })


}