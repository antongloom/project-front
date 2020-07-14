<template>
  <v-row no-gutters class="display-curricula-page">
  	<v-col
  		md="6"
  		offset-md="3"
  		sm="8"
  		offset-sm="2"
  	>
  		<div class="page-header">
	  	  <h1>All Curriculum</h1>
	      <v-btn>Create new</v-btn>
			</div>

			<div class="curriculum-list">
		    <v-card
		      class="page-card"
		    	outlined
		    	v-for="curricula in curriculaData"
		    	:key="curricula.id"
		    >
		    	<v-card-title class="headline">
		    		<router-link :to="`/curricula/${curricula.id}`">{{curricula.name}}</router-link>
		    	</v-card-title>

		    	<v-card-subtitle>
		    		{{curricula.description}}
		    	</v-card-subtitle>
				</v-card>				
			</div>
		</v-col>
  </v-row>
  
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: 'DisplayCurricula',
  data () {
  	return {
  	}
  },
  computed: {
  	...mapState(['curriculaData'])
  }
}
</script>
