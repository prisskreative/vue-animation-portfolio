<template>
  <main>
    <div class="contact">
      <h1>Contact Me</h1>
      <div id="contact-form" class="contact-form">
        <div class="summary text-red" v-if="$v.form.$error">
          Form has errors
        </div>
        <form @submit.prevent="submit">
          <v-text-field
            v-model="form.name"
            :class="{ 'hasError': $v.form.name.$error }"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
          <div class="error" v-if="$v.form.name.$error">Please enter name</div>
          <v-text-field
            v-model="form.email"
            :class="{ 'hasError': $v.form.email.$error }"
            label="E-mail"
            required
          ></v-text-field>

          <v-btn @click="submit" class="btn-darkPink">submit</v-btn>
        </form>
        <!--<div class="summary text-red" v-if="$v.form.$error">
      Form has errors
    </div>
         <form @submit.prevent="submit">
      <div class="flex justify-center my-6">
        <div
           class="px-4"
           :class="{ 'hasError': $v.form.name.$error }">
          <label class="mr-2 font-bold text-grey">Name</label>
          <input type="text" class="input" v-model="form.name">
        </div>
        <div 
          class="px-4"
          :class="{ 'hasError': $v.form.email.$error }">
          <label class="mr-2 font-bold text-grey">Email</label>
          <input type="email" class="input" v-model="form.email">
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="button">
          Submit
        </button>
      </div>
    </form>-->

  	  </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import IconMapPin from '~/components/IconMapPin.vue'
import AppStarRating from '~/components/AppStarRating.vue'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  
  data() {
    return {
      form: {
        name: "",
        email: ""
      }
    };
  },

  validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email }
    }
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      if(this.$v.form.$error) return
      // to form submit after this
      alert('Form submitted')
    }
  },

  components: {
    IconBase,
    IconMapPin,
    AppStarRating
  },
  computed: mapState(['page', 'users', 'places'])
}
</script>

<style lang="scss">
.theme--light.v-footer {
    background: transparent;
    position: absolute;
    bottom: 0;
    padding-left: 47%;
}
.theme--light.v-input:not(.v-input--is-disabled) input {
  .hasError & {
    color: red;
  }
}
.theme--light.v-label{
   .hasError & {
    color: red;
  }
}

.hasError label {
  color: red;
}
</style>

<style lang="scss" scoped>

h1{
    font-size: 45px;
    margin-top: 4%;
    text-align: center;
}

.location img {
  width: 70px;
  float: left;
  margin: 0 10px 10px 0;
}

.main-img {
  background: url('/header1.jpg') center center;
  background-size: cover;
  width: 100%;
  height: 240px;
}

.top {
  margin: 30px 0 0;
}
.contact-form {
	font-family: 16px;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
  margin-top: 7%;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

.contact-form_title {
	color: #333;
	text-align: left;
	font-size: 28px;
}

.contact-form textarea {
	resize: none;
}

.contact-form .button {
  color: #FFFFFF;
	cursor: pointer;
	padding: 15px 50px 20px 50px;
	text-align: center;
	text-transform: uppercase;
}

.contact-form .button:hover {
  color: #FFFFFF;
}


</style>