import {
  collection, 
  onSnapshot,
} from "firebase/firestore";

import * as fl from "firebase/firestore/lite";

import { sendSignInLinkToEmail } from "firebase/auth";
import { tidy, innerJoin, arrange, } from "@tidyjs/tidy"

import { state } from '/src/store.js'

export function emailValidation(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase())
}

export async function readMSDData(uid, query_filters) {
  // console.log('readMSDData', uid, filters)
  const db = fl.getFirestore() // state.db_connection

  const constraints = query_filters.exclude_brands ? fl.where("Brand", "not-in", query_filters.exclude_brands) : []

  const q = fl.query(
    fl.collection(db, "users", uid, "receipts"),
    constraints,
  )

  let receipts = [], items = []

  let docs = await fl.getDocs(q)

  docs.forEach((doc) => {
    receipts.push({
      ...doc.data(),
      doc_id: doc.id, 
      id: doc.data().recordId,
      rid: doc.data().recordId,
      Date: new Date(doc.data().Date.toDate()),
      wk: start_of_week(doc.data().Date.toDate()), 
    });
    items = items.concat(doc.data().items)
  });

  return { receipts, items }
  
}



export async function subscribe_uploads(_this) {

  let uid = _this.state.demo_mode ? "demo_data" : (_this.uid ? _this.uid : _this.state.uid)



  console.log('subscribe_uploads, uid=', uid) 

  if (_this.uploads_unsubscribe) _this.uploads_unsubscribe(); _this.uploads_unsubscribe = undefined; _this.uploads_raw = []

  const uploads_collection = collection(_this.state.db_connection, 'users', uid, 'uploads')

  _this.uploads_unsubscribe = onSnapshot(uploads_collection, async (snapshot) => {
  console.log('uploads snapshot', snapshot)
  if (snapshot.metadata.hasPendingWrites) {
    console.log('pending writes')
    return
  }
  if (snapshot.empty) {
    console.log('empty snapshot')
    return
  }
  uploads_watcher(_this.uploads_raw, snapshot)
})
}

function uploads_watcher(uploads, snapshot) {

  console.log('uploads watcher callback called',snapshot)
  
  snapshot.docChanges().forEach(
    (change) => {
      if (change.type === "added") {
        uploads.push({...change.doc.data(),
          doc_id: change.doc.id,
          })
      }
      if (change.type === "modified") {
        const i =uploads.findIndex(e=>e.doc_id===change.doc.id)
        if (i!==-1) {
          uploads.splice(i, 1)
          uploads.splice(change.newIndex, 0, {...change.doc.data(),
            doc_id: change.doc.id, 
            })
        }
      }
      if (change.type === "removed") {
        const i = uploads.findIndex(e=>e.doc_id===change.doc.id)
        if (i!==-1) uploads.splice(i, 1)
      }
    }
  )

  return true
}

export async function csv_download(_this) {


  const rowsCsv = tidy(
    _this.receipts,
    innerJoin(_this.items,
      {
        by: { recordId: 'recordId' }
      },
      arrange(['recordId', 'nn'])
    )
  )

  console.log('csv_download', rowsCsv)

  const keys = ['Date', 'Store_Name', 'Store_StoreNo', 'Store_Division', 'Store_Latitude', 'Store_Longitude', 'Card Number',
    'Product', 'Quantity',
    'Unit', 'Price Per Unit', 'Price Total', 'Department_c', 'Category_c', 'CountryOfOrigin'
  ]

  const keys_names = ['Date', 'Store Name', 'Store No', 'Store Division', 'Store Lat', 'Store Lon', 'Card Number',
  'Product', 'Quantity',
  'Unit', 'Price Per Unit', 'Price Total', 'Department (suggested)', 'Category (suggested)', 'Country of Origin (suggested)'
  ]

  // console.log(rowsCsv)
  // console.log(String(new Intl.DateTimeFormat(undefined, {timeStyle: 'short', dateStyle: 'short', }).format(rowsCsv[0].Date)) )

  let csvContent = "data:text/csv;charset=utf-8," +
                      keys_names.join(",") + "\n" +
                      rowsCsv.map(
                        row=>keys.map(
                          key=>(
                            JSON.stringify(row[key])==='{}'||row[key]===null ? '' : '"'+ (key === 'Date' ? String(new Intl.DateTimeFormat(undefined, {timeStyle: 'short', dateStyle: 'short', }).format(row[key])) : String(row[key]))+'"')
                          // 
                        ).join(",")
                      ).join("\n")

  var encodedUri = encodeURI(csvContent)
  var link = document.createElement("a")

  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "my_data.csv")
  document.body.appendChild(link) // Required for FF

  link.click()
  _this.loading[2]=false
}


function start_of_week(date) {
  const dow = (date.getDay() + 6) % 7 //===0 ? 7 : date.getDay()
  const mon = new Date((date.getTime() - dow * 86400000))
  return new Date(mon.getFullYear(), mon.getMonth(), mon.getDate(), 0,0,0)
}

export function aud(x) { 
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(x) 
}

export function aud_s(x, f=2) { 
  return new Intl.NumberFormat('en-AU', { minimumFractionDigits: f, maximumFractionDigits:f }).format(x) 
} 

export function dateFormatter(date) { 
  console.log('formatter', date)
  try { 
    return date ? new Intl.DateTimeFormat(undefined, {dateStyle: 'short', }).format(date) : '--/--/--'
  } catch (e) { 
    return '--/--/--' 
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}