import { tidy, groupBy, summarize, mutate, arrange, desc, select, map, filter, slice, innerJoin, fullJoin, rowNumber, mutateWithSummary, sum, mean } from '@tidyjs/tidy'
import { aud, aud_s, capitalizeFirstLetter } from '/src/helpers.js'

export function departmentsTop(_this) {
    return tidy(
      _this.items,
      filter(d=>d['Price Total']>0),
      mutate({Department: d => d.Department ? d.Department : 'Other'}),
      groupBy('Department', summarize({total: sum('Price Total')})),
      // mutate({Department: d => d.Department}),
      select(['Department', 'total']),
      arrange(desc('total')),
      map(d=>({total: aud(d.total), ...d}))
    )
  }

export function chart_dataset(_this) {
    const min_date = _this.anchorDateMinus12M
    const ds = tidy(
      _this.receipts,
      arrange('Date'),
      filter((o)=>o.Date>=min_date),
      groupBy('wk',
      mutateWithSummary({
        stack: rowNumber({ startAt: 1})
        })),
      mutate({wk: el=>new Date(el.wk.getTime()-302400000*2)}), //
      groupBy(['stack', 'wk'], 
      groupBy.values({ single: true }))
    )
    return ds
  }

  export function productTop10(_this) {
    return tidy(
      _this.items,
      filter(d=>d['Price Total']>0),
      innerJoin(_this.receipts, {by:['recordId']}),
      groupBy('Product', summarize({total: sum('Price Total')})),
      arrange(desc('total')),
      slice(0,_this.showTopN),
      map((d)=>{d.total = aud(d.total); return d}),
      mutateWithSummary(
        {
          row: rowNumber( { startAt: 1} )
        }
      )
    )
  }

 export function productTop10byN(_this) {
    return tidy(
      _this.items,
      filter(d=>d['Price Total']>0),
      innerJoin(_this.receipts, {by:{recordId: 'recordId'}}),
      groupBy(['recordId', 'Product'], mutateWithSummary({n:1})),
      groupBy('Product', summarize({total: sum('n')})),
      arrange(desc('total')),
      slice(0,_this.showTopN),
      mutateWithSummary(
        {
          row: rowNumber( { startAt: 1} )
        }
      )
    )
  }

 export function storesTop10(_this) {
    return tidy(
      _this.receipts,
     // map(d=>({...d, Store: (d.Brand==='Supermarkets' ? capitalizeFirstLetter(d.metabrand) : d.Brand)+' '+ d.Store.replace(capitalizeFirstLetter(d.metabrand)+" ", "") })), // d.Brand=='BWS' ? d.Store+" (BWS)" : d.Store})),
      groupBy(['Store', 'Brand', 'Store Number', 'Store_Latitude', 'Store_Longitude'], summarize({total: sum('Receipt Total')})),
      filter((d)=> 'Store_Longitude' in d && 'Store_Latitude' in d),
      arrange(desc('total')),
      slice(0,_this.showTopNstores),
      map(d=>({...d, total_formatted: aud(d.total), })),
      mutateWithSummary(
        {
          row: rowNumber( { startAt: 1} )
        })
    )
  }

 export function dayOfWeekTop10(_this) {

    const weekday = { weekday: "long" }, 
      days = [{dayOfWeek:'Monday'}, {dayOfWeek:'Tuesday'}, {dayOfWeek:'Wednesday'}, {dayOfWeek:'Thursday'}, {dayOfWeek:'Friday'}, {dayOfWeek:'Saturday'}, {dayOfWeek:'Sunday'}]

    return tidy(
      _this.receipts,
      mutate({dayOfWeek: d => new Intl.DateTimeFormat("en-AU", weekday).format(d.Date) , dayOfWeekNum: d => (d.Date.getDay()+6) % 7 }),
      groupBy('dayOfWeek', summarize({total: sum('Receipt Total'), dayN: mean('dayOfWeekNum')})),
      fullJoin(
        tidy(
          days, 
          mutateWithSummary({dayN: rowNumber({startAt: 0})})
        ), {by: 'dayOfWeek'}),
      arrange('dayN'),
      mutate({total: d=>d.total? d.total: 0}),
      map(d=>({total: aud(d.total), ...d})),
    )
  }

export function categoriesTopN(_this) {
    return tidy(
      _this.items,
      filter(d=>d.Price>0),
      mutate({Category: d => d.Category ? (d.Category + ' [in '+d.Department+']') : "Others"}),
      groupBy('Category', summarize({total: sum('Price Total')})),
      select(['Category', 'total']),
      arrange(desc('total')),
      slice(0,_this.categoriesTopNselector),
      map(d=>({total: aud(d.total), ...d}))
    )
  }

export function overallSpendYear(_this) {
    return (tidy(_this.receipts,
      filter(d=>d.Date>=_this.anchorDateMinus12M),
      summarize({total: sum('Receipt Total')}))[0].total)
  }

export function overallSpend12W (_this) {
    return tidy(_this.receipts,
      filter(d=>d.Date>=_this.anchorDateMinus12W),
      summarize({total: sum('Receipt Total')}))[0].total
  }

export function averageSpend(_this) {
    return aud_s(tidy(_this.receipts,
      summarize({ avg: mean('Receipt Total') }))[0].avg)
  }