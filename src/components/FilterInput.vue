<template>
   <div class="webflow-style-input">
      <input
         class=""
         type="exception"
         placeholder="Write to filter name."
         v-model="inputValue"
         @change="onInputChanged"
      />
      <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
   </div>
</template>

<script>
//icon imports
import '@fortawesome/fontawesome-free/css/all.min.css';
//vue imports
import { ref } from 'vue';
export default {
   data() {
      return {
         inputValue: '',
      };
   },
   setup() {
      const inputValue = ref('');

      const onInputChanged = () => {
         // Perform actions to be taken here when input changes
         inputValue.value = inputValue.value.trim(); // Remove spaces at the beginning and end of the entry
      };

      return {
         inputValue,
         onInputChanged,
      };
   },
};
</script>

<style>
/* Değişkenler */
:root {
   --input-background: rgba(189, 193, 206, 0.8);
   --input-text-inactive: #3a3a3b;
   --input-text-active: #000000;
}

/* Gradient animation */
@keyframes gradient {
   0% {
      background-position: 0 0;
   }
   100% {
      background-position: 100% 0;
   }
}

/* .webflow-style-input */
.webflow-style-input {
   position: relative;
   /*display: flex;*/
   display: none;       /*TEDDY TEST replaced flex */
   flex-direction: row;
   width: 90%;
   max-width: 400px;
   margin: 0 auto;
   border-radius: 2px;
   padding: 0.4rem 0.8rem 0.6rem;
   background: linear-gradient(
      to right,
      rgba(178, 148, 255, 0.7),
      /* Başlangıç rengi (opacity 0.5) */ rgba(87, 230, 230, 0.7),
      /* Orta rengi (opacity 0.5) */ rgba(254, 255, 184, 0.7),
      /* Ortadan sağa rengi (opacity 0.5) */ rgba(87, 230, 230, 0.7),
      /* Sağdan ortaya rengi (opacity 0.5) */ rgba(178, 148, 255, 0.7),
      /* Sağdan başlangıç rengi (opacity 0.5) */ rgba(87, 230, 230, 0.7)
         /* Son renk (opacity 0.5) */
   );
   background-size: 500% auto;
   animation: gradient 3s linear infinite;
   border-radius: 0.5rem;
}

/* .webflow-style-input input */
.webflow-style-input input {
   flex-grow: 1;
   color: var(--input-text-active);
   font-size: 1rem;
   line-height: 2.4rem;
   vertical-align: middle;
}

.webflow-style-input input::placeholder {
   color: var(--input-text-inactive);
}

/* .webflow-style-input button */
.webflow-style-input button {
   color: var(--input-text-inactive);
   font-size: 1.5rem;
   line-height: 2.4rem;
   vertical-align: middle;
   transition: color 0.25s;
}

.webflow-style-input button:hover {
   color: var(--input-text-active);
}
</style>
