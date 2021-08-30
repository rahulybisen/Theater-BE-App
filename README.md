### To run application. 

```
Install prerequisites of application.

    a. yarn install OR npm install
    b. yarn
    c. yarn build
    d. run : node bin/dev OR npm run start OR yarn start
```
  **e. To run test: npm test**

</Details>

## Evolving the app

This application basically creats API's for theater application I used Sqlite, GraphQl, nodeJs, mocha-chai to created this application:

Used mocha-chai to run test cases.

API Name :
1. **createTicket :** This api will create ticket record.
2. **updateTicket :** This will do update
3. **ticket :** will return data based on ticket id
4. **tickets :** will return you List of all tickets and provide you all types of pagination sorting and condition based on search.
5. **moneyEarndByTheater :** return you analytic data
6. **visited :** return you analytic data
7. **deleteTicket :** delete records

Open 

http://localhost:8808/

For Authorization u meed to Pass token in HTTP HEADERS section in bottom

{
  "Authorization":"Bearer e5449b53-532e-4241-8389-9aafd8de6caf"
}

![Image 1](images/Screenshot from 2021-08-29 18-47-58.png)

### Copy below query and mutaion and pest them in your http://localhost:8808/ GraphQl screen. Use Authorization in HTTP HEADERS

### For more detail follow images folder present in repo.

### 
mutation createTicket{
  createTicket(data:{
    customerName:"Ajit"
    performanceTitle:"Marvel movie"
    performanceTime:"02:00:00 PM"
    ticketPrice:100
  }){
    id
    customerName
    performanceTitle
    performanceTime
    ticketPrice
    isActive
    createdAt
    updatedAt
  }
}

mutation updateTicket{
  updateTicket(
    data:{customerName:"Abc cut xyz"}
    where:{id:"ckswyr1h20000l3r03l6ce9mx"})
  {
    id
    customerName
    performanceTitle
    performanceTime
    ticketPrice
    isActive
    createdAt
    updatedAt
  }
}

query tiecket{
  ticket(where:{id:"cksx0o7f400005xr0jwrq65sp"}){
    id
    customerName
    performanceTitle
    performanceTime
    ticketPrice
    isActive
    createdAt
    updatedAt
  }
}

query tickts{
  tickets{
    edges{
      id
      customerName
      performanceTitle
      performanceTime
      ticketPrice
      createdAt
      month
    }
    aggregate{
      count
    }
  }
}

query ticktsWithPaginationAndORderByCutomerName{
  tickets(orderBy:customerName_ASC,skip:0,first:5){
    edges{
      id
      customerName
      performanceTitle
      performanceTime
      ticketPrice
      createdAt
      month
    }
    aggregate{
      count
    }
  }
}


query moneyEarndByTheaterByAgg{
  moneyEarndByTheater(where:{fromDate:"2021-06-15",toDate:"2021-08-31",method:aggregation}){
    month
    summaryProfit
  }
}

query vistitedByAgg{
  visited(where:{fromDate:"2021-06-01",toDate:"2021-08-31",method:aggregation}){
    month
    summaryVisits
  }
}

query moneyEarndByTheaterByAlgo{
  moneyEarndByTheater(where:{fromDate:"2021-07-15",toDate:"2021-08-31",method:algorithms}){
    month
    summaryProfit
  }
}

query vistitedByAlgo{
  visited(where:{fromDate:"2021-06-01",toDate:"2021-08-31",method:algorithms}){
    month
    summaryVisits
  }
}


mutation deletetTicket{
  deleteTicket(where:{id:"cksx44lgd0004bjr0c1670bdz"})
}


### To add new model
```
// schema.prisma
Add or updated your model here
```
Once you've updated your data model, you can execute the changes against your database with the following command:

```
npx prisma migrate dev --preview-feature
```