import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Context } from "../App/App";
import { Context2 } from "../App/App";
import { Context3 } from "../App/App";
import React, { useState, useContext, useEffect } from "react";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function Scores(){
const {language, setLanguage} = useContext(Context);
const {score, setScore } = useContext(Context2);
const {scoresArray, setScoresArray}=React.useContext(Context3);


useEffect(() => {
  const newScoresArray = [...scoresArray, {theLanguage: language, score: score}];
  setScoresArray(newScoresArray);
  
}, [""]);


    return(
      <div>
        
      {scoresArray.length === 0 ?   
      <div>No Scores</div> :
     <Grid container spacing={2}>
  
  <Grid item xs={6}>
    <Item>LANGUAGE</Item>
  
    
    {scoresArray.map((item, index) => (
      <Item key={index} value = {item}>
         
            
       <div> {item.theLanguage.language} </div>
       </Item>
    ))} 
  </Grid>
  <Grid item xs={6}>
    <Item>SCORE</Item>
  {scoresArray.map((item, index) => (
       <Item key={index} value = {item}>
        <div> {item.score} </div>
      </Item> 
    ))}
  </Grid>
</Grid>}
        </div>
  );
}



