import CarCard from "./CarCard";

// List that will display car Cards
const List = ( { cardsInfo, listDisplay } ) => {

    // CSS styles

    const carListContainer = {
        display: listDisplay, // "flex",
        gridTemplateColumns: "auto auto auto auto",
        rowGap: "25px",
        margin: "20px",
        padding: "20px"
        // flexWrap: "wrap",
        // justifyContent: "space-between"
    }
  
    return (
        <div style={carListContainer}>
            {
                    cardsInfo.map((cardInfo) => (
                        <CarCard carInfo={cardInfo}/>
                    ))
                }
        </div>
        )

};

export default List;
