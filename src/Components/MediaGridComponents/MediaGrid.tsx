import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponents/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    icon_url: string;
    value: string;
}
interface IMediaGridProps {
    // SearchQuery: (string | null);
    // StartDate: (Date | null);
    // EndDate: (Date | null);
    SearchQuery: (String | null);

}

function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ icon_url:"", value:"" }]);
    //const [ItemArray, setItemArray] = useState<IState[]>([{ data: [] }]);

    useEffect(() => {
        // fetch('https://images-api.nasa.gov/search?media_type=image&q=' + props.SearchQuery + '&year_start=' + props.StartDate?.getFullYear() + '&year_end=' + props.EndDate?.getFullYear())
        fetch('https://api.chucknorris.io/jokes/search?query=' + props.SearchQuery)
            .then(response => response.json())
            .then(response => {
                //setItemArray(response.collection.items)
                setItemArray(response.result)
                //console.log(response.result);
                console.log(response.result)
                
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery]);
    //[props.SearchQuery, props.EndDate, props.StartDate]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.icon_url ||!el.value) {
        //if (!el || !el.links[0] || !el.data) {
            return;
        }
        Cards.push(
            <Grid key={"card_" + i} item sm={6} md={4} lg={3} className="MediaGridCard">
                 {/* <MediaCard ImageUrl={el['result'][0]['icon_url']} Description={el["result"][0]['value']} /> */}
                 <MediaCard ImageUrl={el.icon_url} Description={el.value} />
            </Grid>)
    })

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid