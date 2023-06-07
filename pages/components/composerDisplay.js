export function ComposerDisplay(props) {
    const handleDisplay = (array) => {
        //reset array before repopulating each time
        displayArray = []; 
        if (!data[0] && props.show === true) {
            displayArray.push(<h4>Loading...</h4>)
        } else if (props.show === true) {
        //Makes a li element for each composer and piece
        for (let i = 0; i < array.length; i++) {
          displayArray.push(<li>{array[i].title} by {array[i].composer}</li>)
        }}
      }
   // handleDisplay(data);

    return(
        <div>

        </div>
    )
}