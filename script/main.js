let activeIndex = 0;

const hateButton = document.getElementById("hate-button");

const loveButton = document.getElementById("love-button");

const groups = document.getElementsByClassName("card-group");

//love button

const handleLoveClick = () =>{
    // Bump active index

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    //Active group becomes after

    currentGroup.dataset.status = "after";

    // Next group becomes active
    nextGroup.dataset.status = "becoming-active-from-before"

    setTimeout(() => {
        nextGroup.dataset.status = "active";

        activeIndex = nextIndex;
    });

}

loveButton.addEventListener("click", () => {
    handleLoveClick();
    console.log("funca");
})

// Hate Button

const handleHateClick = () =>{
    // Bump active index

    const previousIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const previousGroup = document.querySelector(`[data-index="${previousIndex}"]`);

    //Active group becomes after

    currentGroup.dataset.status = "before";

    // Next group becomes active
    previousGroup.dataset.status = "becoming-active-from-after"

    setTimeout(() => {
        previousGroup.dataset.status = "active";

        activeIndex = previousIndex;
    });

}

hateButton.addEventListener("click", () => {
    handleHateClick();
    console.log("funca");
})