<template>
    <div>
      <h1>Contact Me</h1>
    <p>
      <ul>
        <li>Email: {{email}}</li>
        <!-- <li>Website: {{web}}</li> -->
      </ul>
    </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data(){
      return {
        email: 'john.meng@mail.utoronto.ca',
      }
    }
  }
  </script>