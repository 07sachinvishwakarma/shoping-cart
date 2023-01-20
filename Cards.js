import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Cardsdata from './CardsData'
import { useDispatch} from 'react-redux'
import {  ADD,REMOVE  } from '../redux/actions/reducers/action'

import "./Style.css";

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  

 

  const dispatch = useDispatch();



  


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  const remove = (item)=>{
    dispatch(REMOVE(item))
  }


  
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                      Price : ₹ {element.price}
                    </Card.Text>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ ()=>remove(element)}>-</span>
                    <span style={{fontSize:22}} > Cart </span>
                    <span style={{fontSize:24}} onClick={()=>send(element)}>+</span>

                    </div>

                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards