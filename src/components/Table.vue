<template>
   <div class="user-table">

      <!-- TEDDY -->
      <div id="ted"  style="display:none;">
         <label style="font-size:18px; font-weight: bold;">Client Name:&nbsp;</label>  
         <input type="text" id="clientname" value="" readonly style="font-size:18px; width:6em"><br><br>
       </div>     

      <table class="bordered-table">
      
         <tbody
               v-for="user in users" >
            <tr> <td  width="80%"><b>{{ user.exception }}</b></td>  <td  width="20%" align="center"><div class="oval">{{ user.count }}</div></td> </tr>
            <tr> <td colspan="2">Session: {{ user.session }}</td> </tr>
            <tr> <td colspan="2">{{ user.message }}</td> </tr>
         </tbody>

      </table>
   </div>
</template>

<script>
//Api imports
import { fetchUserData } from '../api/apiCalls';
import { get_ai_RepairData } from '../api/apiCalls';  //TEDDY

//icon imports
import '@fortawesome/fontawesome-free/css/all.min.css';

import { readonly } from 'vue';

//--ionic portals imports--
import * as Portals from '@ionic/portals';
// import { getInitialContext } from '@ionic/portals';
// import { subscribe } from '@ionic/portals';
// import { publish } from '@ionic/portals';


export default {
   name: 'Table',
   data() {
      return {
         users: [], // Define an empty array containing user data
         sortKey: '',
         sortDirection: 1,
         factObj: null,
      };
   },
   mounted() {
      //this.fetchUsersData(); // call fetchUsersData function to fetch data when component is loaded    
      this.subscribeFactData();  //subscribe to get data from native
      this.sendDataRequestToNative();


   },
   methods: {
      async fetchUsersData() {
         try {
            // Get data by calling fetchUserData function in apiCalls.js
            this.users = await fetchUserData(); // fetchUserData is now called with no parameters    
            //TEDDY TEST reassign users using json object returned from get_ai_RepairData
            this.factObj =  get_ai_RepairData();
            this.users =  this.factObj.messages; 
            this.clientInfo();
            console.log('fetchUsersData = ' + this.users);
         } catch (error) {
            console.log('Failed to import user data:', error);
         }
         //alert('TEDDY IS HERE !!!!');
         console.log("webviewnative - b4 InitialContext");
         const initialContext = Portals.getInitialContext();
         console.log("webviewnative - After InitialContext = "+ initialContext);
         // alert('Value of InitialContext = ' +  initialContext?.value?.native_pkg);
         console.log("webviewnative - Value of InitialContext = " +  initialContext?.value?.native_pkg);
      },

      //---------------------TEDDY---------------------------------------------------
      clientInfo() {
         var txtElement  = document.getElementById("clientname");
          if( txtElement != null) {
            document.getElementById("clientname").value = this.factObj.client;
          }
      },

      getInitCtx() {
         console.log("webviewnative - b4 InitialContext");
         const initialContext = Portals.getInitialContext();
         console.log("webviewnative - After InitialContext = "+ initialContext);
         // alert('Value of InitialContext = ' +  initialContext?.value?.native_pkg);
         console.log("webviewnative - Value of InitialContext = " +  initialContext?.value?.native_pkg);
      },

      //-----------------------------------------------------------------------------
      // Subscribers: To listen for a message published from the native side of a Portal
      //--------------------------------------------------------------------------------
      async subscribeFactData() {
         try {
            //const topic = "comment_topic";
            const topic = "GoCentralDataRsp";
            const portalSubscription = await Portals.subscribe(topic,
               (result) => {
                     console.log("webviewnative - Subscribe Result from  Native = "+ JSON.stringify(result));     //Eg.   {"topic":"FactDataReq","data":"fact-json-string"}
                     //alert('Subscription(weather) :  Received from Native = ' + JSON.stringify(result));
      
                     //parse the data and populate the table
                     const jstr = JSON.stringify(result);
                     const obj = JSON.parse(jstr);
                     const gcStr = obj.data;    //fact-json-string
                     const gcJsonObj = JSON.parse(gcStr);
                     if (!gcJsonObj) {
                        throw new Error('webviewnative - invalid/unexpected output from JSON.parse');
                     }
                     console.log('webviewnative - Subscribe Result gcJsonObj =' + gcJsonObj);

                     this.factObj = gcJsonObj;
                     this.users =  this.factObj.messages;
                     console.log('webviewnative - factObj.messages = ' + this.users);

                     this.clientInfo();

                     //send back data to Native
                    // this.sendResponseToNative();                   
               }
               );

         } catch (error) {
            console.log('webviewnative - requsetFactData Failed:', error);
         }
      }, 

      //-------------------------------------------------------------------------------
      // Publishing Messages​: to send data through a Portal to registered Subscribers.
      //---------------------------------------------------------------------------------
      sendDataResponseToNative(){
         // publishing topic is "GoCentralDataReq"
         console.log("webviewnative - inside sendDataToNativeFunc");
         Portals.publish({ topic: "GoCentralDataReq", data: "Thank you from webview Portal !" });  
      },

      sendDataRequestToNative(){
         // publishing topic is "GoCentralDataReq"
         console.log("webviewnative - inside sendDataRequestToNativeFunc");
         Portals.publish({ topic: "GoCentralDataReq", data: "Portal webview gocentral data request" });  
      }


   },
};

</script>

<style>
.user-table {
   overflow-x:scroll; /*TEDDY*/
   overflow-y:scroll; /*TEDDY*/
   /*display: flex;*/
   justify-content: center;   /*align on main axis*/
   /*align-items: center;*/   /*align on cross axis*/
   margin: 0 1rem;
}

table.bordered-table {
   box-shadow: 4px 8px 12px rgba(28, 6, 49, 0.4);
   border-collapse: collapse; /* Merge intracellular lines */
   /*border-radius: 2rem;*/
   border-radius: 3px;
   overflow: hidden;
   width: 100%;
   text-align: left;
   table-layout: fixed;
   /*table-layout: auto; */
}

table.bordered-table tr:nth-of-type(3n) td {
   /* border-bottom: 3px solid red; */
   /* border-bottom: 4px solid transparent;*/    
        padding-bottom: 1em;
}
table.bordered-table td {
   font-size: 14px;
}

table.bordered-table th,
table.bordered-table td {
    /*border: 1px solid gray;*/
    padding: 2px;
}

.oval {
   width: 45px;
   /*height: 20px;*/
   padding: 3px;
   background: #FF0000 ; /* #FA9C1B ;*/
   border-radius: 10px;
 }




</style>
