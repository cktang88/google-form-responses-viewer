import React, {useState} from 'react';
import styled from 'styled-components';

import Item from './Item.js';
import './ListView.css'

import {SearchInput} from 'evergreen-ui';

function ListView(props) {
    console.log(props);
    return (
        <div>
            <h2>Submissions</h2>
            <br></br>
            <div>
                <SearchInput placeholder='Search' type='text' onChange={searchChanged}></SearchInput >
            </div>

            <div className='list-view-wrapper'>
            {(props.items || []).map((elem, index) => {
                return (
                    <Item item={elem} uid={index} key={index}/>)
                })}
            </div>
        </div>
    )
}

function searchChanged() {

}

export default ListView;