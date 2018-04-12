<template>
  <div class="boarder-binary">
    <select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selected }}</span>
  </div>
</template>
<script>
export default {
    data(){
        return{
            selected: []
        }
    }
}
</script>
<style>
.boarder-binary{
  border: 1px solid black;
  padding:5px;
  
}
</style>