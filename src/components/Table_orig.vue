<template>
   <div class="user-table">

      <!-- TEDDY -->
      <label style="font-size:18px; font-weight: bold;">Client Name:&nbsp;</label>  
      <input type="text" id="clientname" value="" readonly
            style="font-size:18px; width:6em"><br><br>

      <table class="bordered-table">
      
         <colgroup>

         <!-- <col style="width: 16%" />           id# -->
         
           <!-- <col style="width: 20%" /> -->
            <col style="width: 30%" />          <!-- exception -->  
            <col style="width: 50%" />          <!-- message -->
            <col style="width: 20%" />          <!-- count -->
          
         </colgroup>
      

         <thead>
            <tr>
   <!--
               <th @click="sortBy('id')">
                  ID#
                  <i
                     :class="sortIcon('id')"
                     :style="iconStyle('id')"
                  ></i>
               </th>
      -->

<!--
               <th @click="sortBy('type')">
                  Type
                  <i
                     :class="sortIcon('type')"
                     :style="iconStyle('type')"
                  ></i>

               </th>
   -->
               <th @click="sortBy('exception')">
                  Exception
                  <i
                     :class="sortIcon('exception')"
                     :style="iconStyle('exception')"
                  ></i>
               </th>
               <th @click="sortBy('message')">
                  Message
                  <i
                     :class="sortIcon('message')"
                     :style="iconStyle('message')"
                  ></i>
               </th>

               <th @click="sortBy('count')">
                  Count
                  <i
                     :class="sortIcon('count')"
                     :style="iconStyle('count')"
                  ></i>
               </th>
            </tr>
         </thead>
         <tbody>
            <tr
               v-for="user in users"
               :key="user.id"
            >
              <!-- <td>{{ user.id }}</td> -->

               <!--
               <td class="table-user-name">
                  <p>{{ user.count }}</p>
               </td>
               -->
            
               <!-- <td>{{ user.type }}</td> -->
               <td>{{ user.exception }}</td>
               <td>{{ user.message }}</td>
               <td style="text-align: center;">{{ user.count }}</td>
            </tr>
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

      sortBy(key) {
         if (this.sortKey === key) {
            this.sortDirection = this.sortDirection * -1;
         } else {
            this.sortDirection = 1;
            this.sortKey = key;
         }

         // Kullanıcıları sırala
         this.sortUsers();
      },
      sortUsers() {
         this.users.sort((a, b) => {
            const key = this.sortKey;
            const direction = this.sortDirection;

            // Örnek olarak, id'ye göre sıralama yapalım
            if (a[key] > b[key]) return direction;
            if (a[key] < b[key]) return -direction;
            return 0;
         });
      },
      sortIcon(key) {
         if (this.sortKey === key) {
            return this.sortDirection && 'fas fa-chevron-down';
         }
         return; // Sıralama yapılmıyorsa boş bir sınıf döndürür
      },

      iconStyle(key) {
         if (this.sortKey === key) {
            return { transform: `rotate(${this.sortDirection === 1 ? 0 : 180}deg)` };
         }
         return {};
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
            const topic = "FactDataReq";
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
                     this.sendDataToNative();                   
               }
               );

         } catch (error) {
            console.log('webviewnative - requsetFactData Failed:', error);
         }
      }, 

      //-------------------------------------------------------------------------------
      // Publishing Messages​: to send data through a Portal to registered Subscribers.
      //---------------------------------------------------------------------------------
      sendDataToNative(){
         console.log("webviewnative - inside sendDataToNativeFunc");
         Portals.publish({ topic: "web_info_topic", data: "Thank you from webview Portal !" });  
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
   border: 1px solid black; /* Intracellular lines */
   overflow: hidden;
   width: 100%;
   text-align: left;
   table-layout: fixed;
   /* table-layout: auto; */
}

table.bordered-table th {
   font-size: 16px;
}
table.bordered-table td {
   font-size: 14px;
}

table.bordered-table th,
table.bordered-table td {
   /*padding: 0.5rem 2rem;*/
   padding: 2px;
   border: 1px solid black;
   /*margin: 3px;*/
   overflow:hidden; /*TEDDY*/
   margin: 1px;
}

table.bordered-table th {
   cursor: pointer;
}
th i {
   transition: transform 0.3s ease-in-out; /* 0.2 second transition time, ease-in-out speed curve*/
}

/* Required styles to rotate icons */
.rotate-up {
   transform: rotate(180deg); /* Don't turn up */
}

.rotate-down {
   transform: rotate(0deg); /* Don't turn down */
}

.table-user-name p {
   font-weight: bold;
   cursor: pointer;
   color: rgb(86, 81, 81);
   border-bottom: 2px solid rgba(255, 255, 255, 0);
   display: inline;
   transition: all 0.2s ease-in-out;
}

.table-user-name p:hover {
   border-bottom: 2px solid black;
}
</style>
