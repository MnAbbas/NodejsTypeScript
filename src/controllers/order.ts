// "use strict";

import * as models from "../models/mongoose";

import gclient from "../helpers/google"

import { Response, Request } from "restify";

export let addorder = (req: Request, res: Response  )  => {

  let src = req.params.origin
  let dst = req.params.destination
  src =src[0] + ',' + src[1] 
  dst =dst[0] + ',' + dst[1] 


 
  let dist =   gclient([src]  , [dst])
    dist.then((response : any) => {
      
      let newid =   models.nextone("orderid")
      res.json({"status":"success"})
      newid.then((resp : any) => {
        let neworder = new models.OrderModel({ _id : resp , status : "unwanted" , distance : response });
        neworder.save();
      })
        .catch((err : any) =>{
          console.log(err)
          res.status(500)
          res.json({"error":"DB_CONNECTION_ERR"})
          
      })

     
    })
    .catch((err : any) => {
      res.status(400)
      res.json({"error":"GOOGLE_SERVICE_ERR"})

    });

  };

  export let takeorder = (req: Request, res: Response) => {
    let orderid = req.params.id ;
    models.OrderModel.findById(orderid, function(err , o){
      if (!err){
        o.update({ status : "taken"  },{ multi: false } , function(err , resp){
          if (!err){
            res.json(resp)
          }else{
            res.status(500)
            res.json(err)
          }
        })
      }else{
        res.status(500)
        res.json(err)

      }
    })

  }


  export let allorders = (req: Request, res: Response) => {
    let newonewonerder = new models.OrderModel({ _id : 11 , status : "taken" , distance : 11 });

    models.OrderModel.find({},function(err , resp){
      if (!err){
        res.json(resp)
      }
    })

  }