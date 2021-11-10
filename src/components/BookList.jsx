import SingleBook from "./SingleBook";

// const BookList = (props) => (
//     {console.log(props)}
//     <h1>Hi</h1>
//     // props.data.map(HistoryBook => (
//     //     <SingleBook obj={HistoryBook}/>
//     // ))
// )

const BookList = (props) => {
    return (
        props.data.map((HistoryBook, index) => (
            <SingleBook key={index} obj={HistoryBook}/>
        ))
    )
}

export default BookList