import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import PrintQuizes from "../components/PrintQuizes";
import * as ReactBootStrap from 'react-bootstrap';

function Quizes() {
    const [quizes, setQuizes] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getAllQuizes();
    }, []);

    const getAllQuizes = () => {
        axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes',
            {
                headers: {
                    "X-Access-Token": '2471c203ed24f0cb2f19bd9062ec835f19a24e63bfd6e912dfba57fd0dc8c900',
                }
            })
            .then((response) => {
                const allQuizes = response.data;
                setQuizes(allQuizes);
                setLoading(true);

            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <div>
            <NavBar/>
            <br/><br/><br/><br/>
            {loading ? <PrintQuizes {...quizes} /> : <ReactBootStrap.Spinner animation="border"/>}


            {/* <div>{JSON.stringify(quizes)}</div> */}

        </div>
    );
}

export default Quizes;