<template>
   <div class="table">
      <FilterInput />
      <p>{{ inputValue }}</p>
      <Table />
   </div>
</template>

<script>
// @ is an alias to /src
import FilterInput from '@/components/FilterInput.vue';
import Table from '@/components/Table.vue';

export default {
   name: 'TableView',
   components: {
      Table,
      FilterInput,
   },
   data() {
      return {
         inputValue: '', // başlangıçta boş bir değer
      };
   },
   methods: {
      onInputChanged(value) {
         // YourCustomInputComponent bileşeninden gelen değişiklikleri burada ele alabilirsiniz
         this.inputValue = value;
      },
   },
};
</script>

<style>
.table {
   /*background: rgb(227, 222, 222);*/ /*gray*/
   background:#FFFFFF;
   height: 100vh;
   gap: 2rem;
   max-height: 100vh;
   max-width: 100vw;
   display: flex;
   /*justify-content: center;*/  /*TEDDY*/
   align-items: center;
   flex-direction: column;
}
</style>
