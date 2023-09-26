import axios from 'axios';
import apiConfig from './apiConfig';

export const fetchUserData = async (API, USERS) => {
   try {
      const apiUrl = `${apiConfig.API}/${apiConfig.USERS}`;  //https://jsonplaceholder.typicode.com/users
      if (!apiUrl) {
         throw new Error('fetchUserData Invalid..');
      }

      const res = await axios.get(apiUrl);
      console.log('fetchUserData API data =' + res.data);
      return res.data;
   } catch (error) {
      console.log('fetchUserData API Request Failed!!');
      console.log(error.response);
      throw Error;
   }
};


export default { fetchUserData };

/* ---example data retuned from url in fetchUserData ----*/
//   [
//     {
//                   "id": 1,
//                   "name": "Leanne Graham",
//                   "username": "Bret",
//                   "email": "Sincere@april.biz",
//                   "address": {
//                     "street": "Kulas Light",
//                     "suite": "Apt. 556",
//                     "city": "Gwenborough",
//                     "zipcode": "92998-3874",
//                     "geo": {
//                       "lat": "-37.3159",
//                       "lng": "81.1496"
//                     }
//                   },
//                   "phone": "1-770-736-8031 x56442",
//                   "website": "hildegard.org",
//                   "company": {
//                     "name": "Romaguera-Crona",
//                     "catchPhrase": "Multi-layered client-server neural-net",
//                     "bs": "harness real-time e-markets"
//                   }
//                 },
//                 {
//                   "id": 2,
//                   "name": "Ervin Howell",
//                   "username": "Antonette",
//                   "email": "Shanna@melissa.tv",
//                   "address": {
//                     "street": "Victor Plains",
//                     "suite": "Suite 879",
//                     "city": "Wisokyburgh",
//                     "zipcode": "90566-7771",
//                     "geo": {
//                       "lat": "-43.9509",
//                       "lng": "-34.4618"
//                     }
//                   },
//                   "phone": "010-692-6593 x09125",
//                   "website": "anastasia.net",
//                   "company": {
//                     "name": "Deckow-Crist",
//                     "catchPhrase": "Proactive didactic contingency",
//                     "bs": "synergize scalable supply-chains"
//                   }
//                 }
//    ]




//-----------------  TEDDY  additions ------------------------------------------------

//get_ai_RepairData : return json obj from json string
export const get_ai_RepairData = () => {
   //json string
   const gcStr = 
      "{\"eventDate\":\"\",\"sentTime\":\"\",\"source\":\"\",\"client\":\"MIRACLE\",\"eventId\":\"\",\"url\":\"\",\"sessionName\":\"\",\"messages\":[{\"id\":1962826,\"count\":15,\"type\":\"Bond\",\"exception\":\"CashAccount\",\"message\":\"CashAccountIdnotfound:BNLCPUMACU\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:34:43\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962820,\"count\":51,\"type\":\"Bond\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:51:05\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962828,\"count\":3,\"type\":\"CashFlow\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:44:05\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962815,\"count\":1,\"type\":\"Equity\",\"exception\":\"Trade\",\"message\":\"Dealnotfound.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1908:55:57\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962814,\"count\":2,\"type\":\"EquitySwap\",\"exception\":\"Trade\",\"message\":\"Cancelattemptonalreadydeleteddeal.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1908:55:51\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962813,\"count\":4,\"type\":\"EquitySwap\",\"exception\":\"Trade\",\"message\":\"Dealnotfound.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:53:06\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962816,\"count\":94,\"type\":\"Forward\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:50:18\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962817,\"count\":1511,\"type\":\"Future\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1910:35:42\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962829,\"count\":2,\"type\":\"FxOTCOption\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:50:02\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962824,\"count\":50,\"type\":\"FxSwap\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:47:46\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962823,\"count\":79,\"type\":\"InterestRateSwap\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1910:35:32\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962827,\"count\":1,\"type\":\"InterestRateSwap\",\"exception\":\"Trade\",\"message\":\"Dealnotfound.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:38:44\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962822,\"count\":40,\"type\":\"Option\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:50:55\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962821,\"count\":420,\"type\":\"Repo\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1910:35:14\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962818,\"count\":113,\"type\":\"Spot\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:53:48\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962819,\"count\":5,\"type\":\"Transfer\",\"exception\":\"Trade\",\"message\":\"Dealalreadyexists.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1910:35:38\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]},{\"id\":1962825,\"count\":2,\"type\":\"FxOTCOptionTermination\",\"exception\":\"\",\"message\":\"TerminationofanalreadyLiquidatedorExercisedorAssigneddealisnotallowed.Pleasecontactsupportpersonnelifacorrectionisneeded.\",\"session\":\"MIRACLE\",\"lastChangeTime\":\"2023-07-1909:45:42\",\"actions\":null,\"messages\":null,\"actionInProgress\":false,\"tradeActions\":[\"RETRY\",\"ATTEND\"]}]}";

      try {
         const gcJsonObj = JSON.parse(gcStr);
         if (!gcJsonObj) {
            throw new Error('get_ai_RepairData Invalid..');
         }
         console.log('get_ai_RepairData gcJsonObj =' + gcJsonObj);
         return gcJsonObj;
      } catch (error) {
         console.log('get_ai_RepairData  Failed!!');
         throw Error;
      }  

};

/*   -- Example of returned json obj after parsing in get_ai_RepairData() ---*/

// {
//     "eventDate": "",
//     "sentTime": "",
//     "source": "",
//     "client": "MIRACLE",
//     "eventId": "",
//     "url": "",
//     "sessionName": "",
//     "messages": [{
//         "id": 1962826,
//         "count": 15,
//         "type": "Bond",
//         "exception": "CashAccount",
//         "message": "CashAccountId not found: BNLCPUMACU",
//         "session": "MIRACLE",
//         "lastChangeTime": "2023-07-19 09:34:43",
//         "actions": null,
//         "messages": null,
//         "actionInProgress": false,
//         "tradeActions": ["RETRY", "ATTEND"]
//     }, 
//      .......
//    {
//         "id": 1962825,
//         "count": 2,
//         "type": "FxOTCOption Termination",
//         "exception": " ",
//         "message": "Termination of an already Liquidated or Exercised or Assigned deal is not allowed. Please contact support personnel if a correction is needed.",
//         "session": "MIRACLE",
//         "lastChangeTime": "2023-07-19 09:45:42",
//         "actions": null,
//         "messages": null,
//         "actionInProgress": false,
//         "tradeActions": ["RETRY", "ATTEND"]
//     }]
// };




