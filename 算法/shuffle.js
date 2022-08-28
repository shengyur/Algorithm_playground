
function swap(array,a,b) {
    [array[a],array[b]] = [array[b],array[a]]
}

function shuffle(array) {
    for(let i=array.length -1 ;i>0;i--){
        const randomIndex = Math.floor(Math.random() * (i+1))

        swap(array,i,randomIndex)
    }

    return array
}