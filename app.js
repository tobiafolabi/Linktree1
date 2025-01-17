const shareButtons = document.querySelectorAll('.tile-share-button') // shareButtons represents Tile Share buttons
console.log(shareButtons)
//async function returns a value ( text, numbers e.t.c.)
async function copyText(e){
//Prevent share button going to site
    e.preventDefault();
    const link = this.getAttribute('link')
    console.log(link)

    //Below Will help put link into clip board
    try {
    await navigator.clipboard.writeText(link)
    alert("text copied:"+ link)
} 
    catch(err){
    console.error(err)
}
}
//if we click share button, for each share button that exists grab it and add an event listener to it. It listens for clicks. If a share button is clicked copy the link
    shareButtons.forEach(shareButtons => shareButtons.addEventListener('click', copyText))
