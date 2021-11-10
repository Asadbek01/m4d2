import {Component} from 'react'
import SingleBook from "./SingleBook";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class BookList extends Component {

    state = {
        searchQuery: ''
    }


    render() {
        return (
            <>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search"
                    value={this.state.searchQuery}
                    onChange={e => {
                        return this.setState({
                            searchQuery: e.target.value
                        })
                    }}
                    />
                </InputGroup>
    
                {
                    this.props.data.filter(book => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ).map((HistoryBook, index) => (

                        <SingleBook key={index} obj={HistoryBook}/>
                    ))
                }
            </> 
        )
    }
}

export default BookList